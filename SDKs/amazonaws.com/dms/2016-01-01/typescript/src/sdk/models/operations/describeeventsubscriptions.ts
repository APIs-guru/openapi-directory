import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeEventSubscriptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;
}

export enum DescribeEventSubscriptionsXAmzTargetEnum {
    AmazonDmSv20160101DescribeEventSubscriptions = "AmazonDMSv20160101.DescribeEventSubscriptions"
}


export class DescribeEventSubscriptionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeEventSubscriptionsXAmzTargetEnum;
}


export class DescribeEventSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeEventSubscriptionsQueryParams;

  @Metadata()
  headers: DescribeEventSubscriptionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeEventSubscriptionsMessage;
}


export class DescribeEventSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeEventSubscriptionsResponse?: shared.DescribeEventSubscriptionsResponse;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
