import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeReplicationInstanceTaskLogsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;
}

export enum DescribeReplicationInstanceTaskLogsXAmzTargetEnum {
    AmazonDmSv20160101DescribeReplicationInstanceTaskLogs = "AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs"
}


export class DescribeReplicationInstanceTaskLogsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeReplicationInstanceTaskLogsXAmzTargetEnum;
}


export class DescribeReplicationInstanceTaskLogsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeReplicationInstanceTaskLogsQueryParams;

  @Metadata()
  headers: DescribeReplicationInstanceTaskLogsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeReplicationInstanceTaskLogsMessage;
}


export class DescribeReplicationInstanceTaskLogsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeReplicationInstanceTaskLogsResponse?: shared.DescribeReplicationInstanceTaskLogsResponse;

  @Metadata()
  invalidResourceStateFault?: any;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
