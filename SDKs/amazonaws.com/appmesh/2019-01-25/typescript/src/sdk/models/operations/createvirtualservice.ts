import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateVirtualServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;
}


export class CreateVirtualServiceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=meshOwner" })
  meshOwner?: string;
}


export class CreateVirtualServiceHeaders extends SpeakeasyBase {
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


// CreateVirtualServiceRequestBodySpec
/** 
 * An object that represents the specification of a virtual service.
**/
export class CreateVirtualServiceRequestBodySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=provider" })
  provider?: shared.VirtualServiceProvider;
}


export class CreateVirtualServiceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=spec" })
  spec: CreateVirtualServiceRequestBodySpec;

  @Metadata({ data: "json, name=tags", elemType: shared.TagRef })
  tags?: shared.TagRef[];

  @Metadata({ data: "json, name=virtualServiceName" })
  virtualServiceName: string;
}


export class CreateVirtualServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateVirtualServicePathParams;

  @Metadata()
  queryParams: CreateVirtualServiceQueryParams;

  @Metadata()
  headers: CreateVirtualServiceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateVirtualServiceRequestBody;
}


export class CreateVirtualServiceResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createVirtualServiceOutput?: shared.CreateVirtualServiceOutput;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
