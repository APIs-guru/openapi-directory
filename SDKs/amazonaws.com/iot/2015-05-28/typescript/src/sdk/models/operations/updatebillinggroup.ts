import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateBillingGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billingGroupName" })
  billingGroupName: string;
}


export class UpdateBillingGroupHeaders extends SpeakeasyBase {
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


// UpdateBillingGroupRequestBodyBillingGroupProperties
/** 
 * The properties of a billing group.
**/
export class UpdateBillingGroupRequestBodyBillingGroupProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingGroupDescription" })
  billingGroupDescription?: string;
}


export class UpdateBillingGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingGroupProperties" })
  billingGroupProperties: UpdateBillingGroupRequestBodyBillingGroupProperties;

  @SpeakeasyMetadata({ data: "json, name=expectedVersion" })
  expectedVersion?: number;
}


export class UpdateBillingGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateBillingGroupPathParams;

  @SpeakeasyMetadata()
  headers: UpdateBillingGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateBillingGroupRequestBody;
}


export class UpdateBillingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateBillingGroupResponse?: shared.UpdateBillingGroupResponse;

  @SpeakeasyMetadata()
  versionConflictException?: any;
}
