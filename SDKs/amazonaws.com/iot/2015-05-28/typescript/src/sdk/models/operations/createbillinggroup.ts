import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateBillingGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=billingGroupName" })
  billingGroupName: string;
}


export class CreateBillingGroupHeaders extends SpeakeasyBase {
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


// CreateBillingGroupRequestBodyBillingGroupProperties
/** 
 * The properties of a billing group.
**/
export class CreateBillingGroupRequestBodyBillingGroupProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingGroupDescription" })
  billingGroupDescription?: string;
}


export class CreateBillingGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingGroupProperties" })
  billingGroupProperties?: CreateBillingGroupRequestBodyBillingGroupProperties;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateBillingGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateBillingGroupPathParams;

  @Metadata()
  headers: CreateBillingGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateBillingGroupRequestBody;
}


export class CreateBillingGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createBillingGroupResponse?: shared.CreateBillingGroupResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
