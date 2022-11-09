import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateVirtualNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;
}


export class CreateVirtualNodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=meshOwner" })
  meshOwner?: string;
}


export class CreateVirtualNodeHeaders extends SpeakeasyBase {
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


// CreateVirtualNodeRequestBodySpec
/** 
 * An object that represents the specification of a virtual node.
**/
export class CreateVirtualNodeRequestBodySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=backendDefaults" })
  backendDefaults?: shared.BackendDefaults;

  @Metadata({ data: "json, name=backends", elemType: shared.Backend })
  backends?: shared.Backend[];

  @Metadata({ data: "json, name=listeners", elemType: shared.Listener })
  listeners?: shared.Listener[];

  @Metadata({ data: "json, name=logging" })
  logging?: shared.Logging;

  @Metadata({ data: "json, name=serviceDiscovery" })
  serviceDiscovery?: shared.ServiceDiscovery;
}


export class CreateVirtualNodeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=spec" })
  spec: CreateVirtualNodeRequestBodySpec;

  @Metadata({ data: "json, name=tags", elemType: shared.TagRef })
  tags?: shared.TagRef[];

  @Metadata({ data: "json, name=virtualNodeName" })
  virtualNodeName: string;
}


export class CreateVirtualNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateVirtualNodePathParams;

  @Metadata()
  queryParams: CreateVirtualNodeQueryParams;

  @Metadata()
  headers: CreateVirtualNodeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateVirtualNodeRequestBody;
}


export class CreateVirtualNodeResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createVirtualNodeOutput?: shared.CreateVirtualNodeOutput;

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
