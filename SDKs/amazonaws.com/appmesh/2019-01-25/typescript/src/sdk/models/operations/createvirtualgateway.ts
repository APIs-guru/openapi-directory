import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateVirtualGatewayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;
}


export class CreateVirtualGatewayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=meshOwner" })
  meshOwner?: string;
}


export class CreateVirtualGatewayHeaders extends SpeakeasyBase {
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


// CreateVirtualGatewayRequestBodySpec
/** 
 * An object that represents the specification of a service mesh resource.
**/
export class CreateVirtualGatewayRequestBodySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=backendDefaults" })
  backendDefaults?: shared.VirtualGatewayBackendDefaults;

  @Metadata({ data: "json, name=listeners", elemType: shared.VirtualGatewayListener })
  listeners?: shared.VirtualGatewayListener[];

  @Metadata({ data: "json, name=logging" })
  logging?: shared.VirtualGatewayLogging;
}


export class CreateVirtualGatewayRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=spec" })
  spec: CreateVirtualGatewayRequestBodySpec;

  @Metadata({ data: "json, name=tags", elemType: shared.TagRef })
  tags?: shared.TagRef[];

  @Metadata({ data: "json, name=virtualGatewayName" })
  virtualGatewayName: string;
}


export class CreateVirtualGatewayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateVirtualGatewayPathParams;

  @Metadata()
  queryParams: CreateVirtualGatewayQueryParams;

  @Metadata()
  headers: CreateVirtualGatewayHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateVirtualGatewayRequestBody;
}


export class CreateVirtualGatewayResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createVirtualGatewayOutput?: shared.CreateVirtualGatewayOutput;

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
