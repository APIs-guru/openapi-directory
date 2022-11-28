import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateVirtualServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;
}


export class CreateVirtualServiceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meshOwner" })
  meshOwner?: string;
}


export class CreateVirtualServiceHeaders extends SpeakeasyBase {
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


// CreateVirtualServiceRequestBodySpec
/** 
 * An object that represents the specification of a virtual service.
**/
export class CreateVirtualServiceRequestBodySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: shared.VirtualServiceProvider;
}


export class CreateVirtualServiceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: CreateVirtualServiceRequestBodySpec;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.TagRef })
  tags?: shared.TagRef[];

  @SpeakeasyMetadata({ data: "json, name=virtualServiceName" })
  virtualServiceName: string;
}


export class CreateVirtualServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateVirtualServicePathParams;

  @SpeakeasyMetadata()
  queryParams: CreateVirtualServiceQueryParams;

  @SpeakeasyMetadata()
  headers: CreateVirtualServiceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateVirtualServiceRequestBody;
}


export class CreateVirtualServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createVirtualServiceOutput?: shared.CreateVirtualServiceOutput;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
