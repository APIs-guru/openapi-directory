import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateLifecyclePolicyHeaders extends SpeakeasyBase {
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


// CreateLifecyclePolicyRequestBodyPolicyDetails
/** 
 * Specifies the configuration of a lifecycle policy.
**/
export class CreateLifecyclePolicyRequestBodyPolicyDetails extends SpeakeasyBase {
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

export enum CreateLifecyclePolicyRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}


export class CreateLifecyclePolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyDetails" })
  policyDetails: CreateLifecyclePolicyRequestBodyPolicyDetails;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state: CreateLifecyclePolicyRequestBodyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class CreateLifecyclePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateLifecyclePolicyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateLifecyclePolicyRequestBody;
}


export class CreateLifecyclePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createLifecyclePolicyResponse?: shared.CreateLifecyclePolicyResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
