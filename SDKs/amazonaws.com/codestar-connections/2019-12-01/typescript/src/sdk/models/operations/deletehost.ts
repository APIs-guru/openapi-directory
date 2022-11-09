import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteHostXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHost = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost"
}


export class DeleteHostHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteHostXAmzTargetEnum;
}


export class DeleteHostRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteHostHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteHostInput;
}


export class DeleteHostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteHostOutput?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  resourceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
