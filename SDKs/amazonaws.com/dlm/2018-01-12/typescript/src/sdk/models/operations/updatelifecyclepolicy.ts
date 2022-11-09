import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLifecyclePolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=policyId" })
  policyId: string;
}


export class UpdateLifecyclePolicyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateLifecyclePolicyRequestBodyPolicyDetails
/** 
 * Specifies the configuration of a lifecycle policy.
**/
export class UpdateLifecyclePolicyRequestBodyPolicyDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Actions", elemType: shared.Action })
  actions?: shared.Action[];

  @Metadata({ data: "json, name=EventSource" })
  eventSource?: shared.EventSource;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: shared.Parameters;

  @Metadata({ data: "json, name=PolicyType" })
  policyType?: shared.PolicyTypeValuesEnum;

  @Metadata({ data: "json, name=ResourceLocations" })
  resourceLocations?: shared.ResourceLocationValuesEnum[];

  @Metadata({ data: "json, name=ResourceTypes" })
  resourceTypes?: shared.ResourceTypeValuesEnum[];

  @Metadata({ data: "json, name=Schedules", elemType: shared.Schedule })
  schedules?: shared.Schedule[];

  @Metadata({ data: "json, name=TargetTags", elemType: shared.Tag })
  targetTags?: shared.Tag[];
}

export enum UpdateLifecyclePolicyRequestBodyStateEnum {
    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}


export class UpdateLifecyclePolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn?: string;

  @Metadata({ data: "json, name=PolicyDetails" })
  policyDetails?: UpdateLifecyclePolicyRequestBodyPolicyDetails;

  @Metadata({ data: "json, name=State" })
  state?: UpdateLifecyclePolicyRequestBodyStateEnum;
}


export class UpdateLifecyclePolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLifecyclePolicyPathParams;

  @Metadata()
  headers: UpdateLifecyclePolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateLifecyclePolicyRequestBody;
}


export class UpdateLifecyclePolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateLifecyclePolicyResponse?: Map<string, any>;
}
