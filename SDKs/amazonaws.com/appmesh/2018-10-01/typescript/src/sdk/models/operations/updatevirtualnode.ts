import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateVirtualNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=virtualNodeName" })
  virtualNodeName: string;
}


export class UpdateVirtualNodeHeaders extends SpeakeasyBase {
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


// UpdateVirtualNodeRequestBodySpec
/** 
 * An object representing the specification of a virtual node.
**/
export class UpdateVirtualNodeRequestBodySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=backends" })
  backends?: string[];

  @Metadata({ data: "json, name=listeners", elemType: shared.Listener })
  listeners?: shared.Listener[];

  @Metadata({ data: "json, name=serviceDiscovery" })
  serviceDiscovery?: shared.ServiceDiscovery;
}


export class UpdateVirtualNodeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=spec" })
  spec: UpdateVirtualNodeRequestBodySpec;
}


export class UpdateVirtualNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateVirtualNodePathParams;

  @Metadata()
  headers: UpdateVirtualNodeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateVirtualNodeRequestBody;
}


export class UpdateVirtualNodeResponse extends SpeakeasyBase {
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
  updateVirtualNodeOutput?: shared.UpdateVirtualNodeOutput;
}
