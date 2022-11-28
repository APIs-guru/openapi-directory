import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateVirtualNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;
}


export class CreateVirtualNodeHeaders extends SpeakeasyBase {
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


// CreateVirtualNodeRequestBodySpec
/** 
 * An object representing the specification of a virtual node.
**/
export class CreateVirtualNodeRequestBodySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backends" })
  backends?: string[];

  @SpeakeasyMetadata({ data: "json, name=listeners", elemType: shared.Listener })
  listeners?: shared.Listener[];

  @SpeakeasyMetadata({ data: "json, name=serviceDiscovery" })
  serviceDiscovery?: shared.ServiceDiscovery;
}


export class CreateVirtualNodeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: CreateVirtualNodeRequestBodySpec;

  @SpeakeasyMetadata({ data: "json, name=virtualNodeName" })
  virtualNodeName: string;
}


export class CreateVirtualNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateVirtualNodePathParams;

  @SpeakeasyMetadata()
  headers: CreateVirtualNodeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateVirtualNodeRequestBody;
}


export class CreateVirtualNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createVirtualNodeOutput?: shared.CreateVirtualNodeOutput;

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
