import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetHostXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHost = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost"
}


export class GetHostHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetHostXAmzTargetEnum;
}


export class GetHostRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetHostHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetHostInput;
}


export class GetHostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getHostOutput?: shared.GetHostOutput;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  resourceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
