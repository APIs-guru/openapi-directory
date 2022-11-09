import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeReplicationTasksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;
}

export enum DescribeReplicationTasksXAmzTargetEnum {
    AmazonDmSv20160101DescribeReplicationTasks = "AmazonDMSv20160101.DescribeReplicationTasks"
}


export class DescribeReplicationTasksHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeReplicationTasksXAmzTargetEnum;
}


export class DescribeReplicationTasksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeReplicationTasksQueryParams;

  @Metadata()
  headers: DescribeReplicationTasksHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeReplicationTasksMessage;
}


export class DescribeReplicationTasksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeReplicationTasksResponse?: shared.DescribeReplicationTasksResponse;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
