import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeOrderableReplicationInstancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;
}

export enum DescribeOrderableReplicationInstancesXAmzTargetEnum {
    AmazonDmSv20160101DescribeOrderableReplicationInstances = "AmazonDMSv20160101.DescribeOrderableReplicationInstances"
}


export class DescribeOrderableReplicationInstancesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeOrderableReplicationInstancesXAmzTargetEnum;
}


export class DescribeOrderableReplicationInstancesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeOrderableReplicationInstancesQueryParams;

  @Metadata()
  headers: DescribeOrderableReplicationInstancesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeOrderableReplicationInstancesMessage;
}


export class DescribeOrderableReplicationInstancesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeOrderableReplicationInstancesResponse?: shared.DescribeOrderableReplicationInstancesResponse;

  @Metadata()
  statusCode: number;
}
