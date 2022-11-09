import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateBillingGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=billingGroupName" })
  billingGroupName: string;
}


export class UpdateBillingGroupHeaders extends SpeakeasyBase {
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


// UpdateBillingGroupRequestBodyBillingGroupProperties
/** 
 * The properties of a billing group.
**/
export class UpdateBillingGroupRequestBodyBillingGroupProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingGroupDescription" })
  billingGroupDescription?: string;
}


export class UpdateBillingGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingGroupProperties" })
  billingGroupProperties: UpdateBillingGroupRequestBodyBillingGroupProperties;

  @Metadata({ data: "json, name=expectedVersion" })
  expectedVersion?: number;
}


export class UpdateBillingGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateBillingGroupPathParams;

  @Metadata()
  headers: UpdateBillingGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateBillingGroupRequestBody;
}


export class UpdateBillingGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateBillingGroupResponse?: shared.UpdateBillingGroupResponse;

  @Metadata()
  versionConflictException?: any;
}
