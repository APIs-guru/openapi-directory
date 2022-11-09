import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeConnectionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;
}

export enum DescribeConnectionsXAmzTargetEnum {
    AmazonDmSv20160101DescribeConnections = "AmazonDMSv20160101.DescribeConnections"
}


export class DescribeConnectionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeConnectionsXAmzTargetEnum;
}


export class DescribeConnectionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeConnectionsQueryParams;

  @Metadata()
  headers: DescribeConnectionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeConnectionsMessage;
}


export class DescribeConnectionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeConnectionsResponse?: shared.DescribeConnectionsResponse;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
