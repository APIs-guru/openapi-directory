import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateVirtualGatewayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;
}


export class CreateVirtualGatewayQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meshOwner" })
  meshOwner?: string;
}


export class CreateVirtualGatewayHeaders extends SpeakeasyBase {
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


// CreateVirtualGatewayRequestBodySpec
/** 
 * An object that represents the specification of a service mesh resource.
**/
export class CreateVirtualGatewayRequestBodySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendDefaults" })
  backendDefaults?: shared.VirtualGatewayBackendDefaults;

  @SpeakeasyMetadata({ data: "json, name=listeners", elemType: shared.VirtualGatewayListener })
  listeners?: shared.VirtualGatewayListener[];

  @SpeakeasyMetadata({ data: "json, name=logging" })
  logging?: shared.VirtualGatewayLogging;
}


export class CreateVirtualGatewayRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: CreateVirtualGatewayRequestBodySpec;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.TagRef })
  tags?: shared.TagRef[];

  @SpeakeasyMetadata({ data: "json, name=virtualGatewayName" })
  virtualGatewayName: string;
}


export class CreateVirtualGatewayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateVirtualGatewayPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateVirtualGatewayQueryParams;

  @SpeakeasyMetadata()
  headers: CreateVirtualGatewayHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateVirtualGatewayRequestBody;
}


export class CreateVirtualGatewayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createVirtualGatewayOutput?: shared.CreateVirtualGatewayOutput;

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
