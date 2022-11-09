import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateLifecyclePolicyHeaders extends SpeakeasyBase {
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


// CreateLifecyclePolicyRequestBodyPolicyDetails
/** 
 * Specifies the configuration of a lifecycle policy.
**/
export class CreateLifecyclePolicyRequestBodyPolicyDetails extends SpeakeasyBase {
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

export enum CreateLifecyclePolicyRequestBodyStateEnum {
    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}


export class CreateLifecyclePolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn: string;

  @Metadata({ data: "json, name=PolicyDetails" })
  policyDetails: CreateLifecyclePolicyRequestBodyPolicyDetails;

  @Metadata({ data: "json, name=State" })
  state: CreateLifecyclePolicyRequestBodyStateEnum;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class CreateLifecyclePolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateLifecyclePolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateLifecyclePolicyRequestBody;
}


export class CreateLifecyclePolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createLifecyclePolicyResponse?: shared.CreateLifecyclePolicyResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}
