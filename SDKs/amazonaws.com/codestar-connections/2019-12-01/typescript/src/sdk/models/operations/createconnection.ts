import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateConnectionXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnection = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection"
}


export class CreateConnectionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateConnectionXAmzTargetEnum;
}


export class CreateConnectionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateConnectionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateConnectionInput;
}


export class CreateConnectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createConnectionOutput?: shared.CreateConnectionOutput;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  resourceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
