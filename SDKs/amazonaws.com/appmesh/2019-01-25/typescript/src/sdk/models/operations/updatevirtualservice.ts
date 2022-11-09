import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateVirtualServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=virtualServiceName" })
  virtualServiceName: string;
}


export class UpdateVirtualServiceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=meshOwner" })
  meshOwner?: string;
}


export class UpdateVirtualServiceHeaders extends SpeakeasyBase {
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


// UpdateVirtualServiceRequestBodySpec
/** 
 * An object that represents the specification of a virtual service.
**/
export class UpdateVirtualServiceRequestBodySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=provider" })
  provider?: shared.VirtualServiceProvider;
}


export class UpdateVirtualServiceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=spec" })
  spec: UpdateVirtualServiceRequestBodySpec;
}


export class UpdateVirtualServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateVirtualServicePathParams;

  @Metadata()
  queryParams: UpdateVirtualServiceQueryParams;

  @Metadata()
  headers: UpdateVirtualServiceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateVirtualServiceRequestBody;
}


export class UpdateVirtualServiceResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

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

  @Metadata()
  updateVirtualServiceOutput?: shared.UpdateVirtualServiceOutput;
}
