import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateHostXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHost = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost"
}


export class CreateHostHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateHostXAmzTargetEnum;
}


export class CreateHostRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateHostHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateHostInput;
}


export class CreateHostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createHostOutput?: shared.CreateHostOutput;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}
