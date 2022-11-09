import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateVirtualClusterHeaders extends SpeakeasyBase {
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


// CreateVirtualClusterRequestBodyContainerProvider
/** 
 * The information about the container provider.
**/
export class CreateVirtualClusterRequestBodyContainerProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=info" })
  info?: shared.ContainerInfo;

  @Metadata({ data: "json, name=type" })
  type?: shared.ContainerProviderTypeEnum;
}


export class CreateVirtualClusterRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=containerProvider" })
  containerProvider: CreateVirtualClusterRequestBodyContainerProvider;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateVirtualClusterRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateVirtualClusterHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateVirtualClusterRequestBody;
}


export class CreateVirtualClusterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createVirtualClusterResponse?: shared.CreateVirtualClusterResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
