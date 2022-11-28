import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateLifecyclePolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=policyId" })
  policyId: string;
}


export class UpdateLifecyclePolicyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateLifecyclePolicyRequestBodyPolicyDetails
/** 
 * Specifies the configuration of a lifecycle policy.
**/
export class UpdateLifecyclePolicyRequestBodyPolicyDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Actions", elemType: shared.Action })
  actions?: shared.Action[];

  @SpeakeasyMetadata({ data: "json, name=EventSource" })
  eventSource?: shared.EventSource;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: shared.Parameters;

  @SpeakeasyMetadata({ data: "json, name=PolicyType" })
  policyType?: shared.PolicyTypeValuesEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceLocations" })
  resourceLocations?: shared.ResourceLocationValuesEnum[];

  @SpeakeasyMetadata({ data: "json, name=ResourceTypes" })
  resourceTypes?: shared.ResourceTypeValuesEnum[];

  @SpeakeasyMetadata({ data: "json, name=Schedules", elemType: shared.Schedule })
  schedules?: shared.Schedule[];

  @SpeakeasyMetadata({ data: "json, name=TargetTags", elemType: shared.Tag })
  targetTags?: shared.Tag[];
}

export enum UpdateLifecyclePolicyRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}


export class UpdateLifecyclePolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyDetails" })
  policyDetails?: UpdateLifecyclePolicyRequestBodyPolicyDetails;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: UpdateLifecyclePolicyRequestBodyStateEnum;
}


export class UpdateLifecyclePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateLifecyclePolicyPathParams;

  @SpeakeasyMetadata()
  headers: UpdateLifecyclePolicyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateLifecyclePolicyRequestBody;
}


export class UpdateLifecyclePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateLifecyclePolicyResponse?: Map<string, any>;
}
