import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateVirtualGatewayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=virtualGatewayName" })
  virtualGatewayName: string;
}


export class UpdateVirtualGatewayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=meshOwner" })
  meshOwner?: string;
}


export class UpdateVirtualGatewayHeaders extends SpeakeasyBase {
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


// UpdateVirtualGatewayRequestBodySpec
/** 
 * An object that represents the specification of a service mesh resource.
**/
export class UpdateVirtualGatewayRequestBodySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=backendDefaults" })
  backendDefaults?: shared.VirtualGatewayBackendDefaults;

  @Metadata({ data: "json, name=listeners", elemType: shared.VirtualGatewayListener })
  listeners?: shared.VirtualGatewayListener[];

  @Metadata({ data: "json, name=logging" })
  logging?: shared.VirtualGatewayLogging;
}


export class UpdateVirtualGatewayRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=spec" })
  spec: UpdateVirtualGatewayRequestBodySpec;
}


export class UpdateVirtualGatewayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateVirtualGatewayPathParams;

  @Metadata()
  queryParams: UpdateVirtualGatewayQueryParams;

  @Metadata()
  headers: UpdateVirtualGatewayHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateVirtualGatewayRequestBody;
}


export class UpdateVirtualGatewayResponse extends SpeakeasyBase {
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
  updateVirtualGatewayOutput?: shared.UpdateVirtualGatewayOutput;
}
