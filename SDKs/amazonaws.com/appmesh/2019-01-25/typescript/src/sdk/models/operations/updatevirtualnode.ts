import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateVirtualNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualNodeName" })
  virtualNodeName: string;
}


export class UpdateVirtualNodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meshOwner" })
  meshOwner?: string;
}


export class UpdateVirtualNodeHeaders extends SpeakeasyBase {
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


// UpdateVirtualNodeRequestBodySpec
/** 
 * An object that represents the specification of a virtual node.
**/
export class UpdateVirtualNodeRequestBodySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendDefaults" })
  backendDefaults?: shared.BackendDefaults;

  @SpeakeasyMetadata({ data: "json, name=backends", elemType: shared.Backend })
  backends?: shared.Backend[];

  @SpeakeasyMetadata({ data: "json, name=listeners", elemType: shared.Listener })
  listeners?: shared.Listener[];

  @SpeakeasyMetadata({ data: "json, name=logging" })
  logging?: shared.Logging;

  @SpeakeasyMetadata({ data: "json, name=serviceDiscovery" })
  serviceDiscovery?: shared.ServiceDiscovery;
}


export class UpdateVirtualNodeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: UpdateVirtualNodeRequestBodySpec;
}


export class UpdateVirtualNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateVirtualNodePathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateVirtualNodeQueryParams;

  @SpeakeasyMetadata()
  headers: UpdateVirtualNodeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateVirtualNodeRequestBody;
}


export class UpdateVirtualNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

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

  @SpeakeasyMetadata()
  updateVirtualNodeOutput?: shared.UpdateVirtualNodeOutput;
}
