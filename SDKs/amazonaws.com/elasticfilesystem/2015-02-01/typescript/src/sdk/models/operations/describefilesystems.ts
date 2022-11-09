import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeFileSystemsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=CreationToken" })
  creationToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FileSystemId" })
  fileSystemId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;
}


export class DescribeFileSystemsHeaders extends SpeakeasyBase {
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


export class DescribeFileSystemsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeFileSystemsQueryParams;

  @Metadata()
  headers: DescribeFileSystemsHeaders;
}


export class DescribeFileSystemsResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeFileSystemsResponse?: shared.DescribeFileSystemsResponse;

  @Metadata()
  fileSystemNotFound?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
