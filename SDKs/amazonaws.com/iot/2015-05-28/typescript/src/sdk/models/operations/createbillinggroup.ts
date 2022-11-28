import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateBillingGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billingGroupName" })
  billingGroupName: string;
}


export class CreateBillingGroupHeaders extends SpeakeasyBase {
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


// CreateBillingGroupRequestBodyBillingGroupProperties
/** 
 * The properties of a billing group.
**/
export class CreateBillingGroupRequestBodyBillingGroupProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingGroupDescription" })
  billingGroupDescription?: string;
}


export class CreateBillingGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingGroupProperties" })
  billingGroupProperties?: CreateBillingGroupRequestBodyBillingGroupProperties;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateBillingGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateBillingGroupPathParams;

  @SpeakeasyMetadata()
  headers: CreateBillingGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateBillingGroupRequestBody;
}


export class CreateBillingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createBillingGroupResponse?: shared.CreateBillingGroupResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
