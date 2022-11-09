import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListHostsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListHostsXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHosts = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts"
}


export class ListHostsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListHostsXAmzTargetEnum;
}


export class ListHostsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListHostsQueryParams;

  @Metadata()
  headers: ListHostsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListHostsInput;
}


export class ListHostsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listHostsOutput?: shared.ListHostsOutput;

  @Metadata()
  statusCode: number;
}
