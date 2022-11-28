import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateVirtualRouterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;
}


export class CreateVirtualRouterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meshOwner" })
  meshOwner?: string;
}


export class CreateVirtualRouterHeaders extends SpeakeasyBase {
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


// CreateVirtualRouterRequestBodySpec
/** 
 * An object that represents the specification of a virtual router.
**/
export class CreateVirtualRouterRequestBodySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listeners", elemType: shared.VirtualRouterListener })
  listeners?: shared.VirtualRouterListener[];
}


export class CreateVirtualRouterRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: CreateVirtualRouterRequestBodySpec;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.TagRef })
  tags?: shared.TagRef[];

  @SpeakeasyMetadata({ data: "json, name=virtualRouterName" })
  virtualRouterName: string;
}


export class CreateVirtualRouterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateVirtualRouterPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateVirtualRouterQueryParams;

  @SpeakeasyMetadata()
  headers: CreateVirtualRouterHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateVirtualRouterRequestBody;
}


export class CreateVirtualRouterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createVirtualRouterOutput?: shared.CreateVirtualRouterOutput;

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
