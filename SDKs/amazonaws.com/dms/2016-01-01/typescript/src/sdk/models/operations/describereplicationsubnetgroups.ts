import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeReplicationSubnetGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;
}

export enum DescribeReplicationSubnetGroupsXAmzTargetEnum {
    AmazonDmSv20160101DescribeReplicationSubnetGroups = "AmazonDMSv20160101.DescribeReplicationSubnetGroups"
}


export class DescribeReplicationSubnetGroupsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeReplicationSubnetGroupsXAmzTargetEnum;
}


export class DescribeReplicationSubnetGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeReplicationSubnetGroupsQueryParams;

  @Metadata()
  headers: DescribeReplicationSubnetGroupsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeReplicationSubnetGroupsMessage;
}


export class DescribeReplicationSubnetGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeReplicationSubnetGroupsResponse?: shared.DescribeReplicationSubnetGroupsResponse;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
