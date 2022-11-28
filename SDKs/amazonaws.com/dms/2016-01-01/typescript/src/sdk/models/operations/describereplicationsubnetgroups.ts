import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeReplicationSubnetGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;
}

export enum DescribeReplicationSubnetGroupsXAmzTargetEnum {
    AmazonDmSv20160101DescribeReplicationSubnetGroups = "AmazonDMSv20160101.DescribeReplicationSubnetGroups"
}


export class DescribeReplicationSubnetGroupsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeReplicationSubnetGroupsXAmzTargetEnum;
}


export class DescribeReplicationSubnetGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeReplicationSubnetGroupsQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeReplicationSubnetGroupsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeReplicationSubnetGroupsMessage;
}


export class DescribeReplicationSubnetGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeReplicationSubnetGroupsResponse?: shared.DescribeReplicationSubnetGroupsResponse;

  @SpeakeasyMetadata()
  resourceNotFoundFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
