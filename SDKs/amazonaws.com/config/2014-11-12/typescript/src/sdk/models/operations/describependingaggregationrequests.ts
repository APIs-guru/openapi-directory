import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribePendingAggregationRequestsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribePendingAggregationRequestsXAmzTargetEnum {
    StarlingDoveServiceDescribePendingAggregationRequests = "StarlingDoveService.DescribePendingAggregationRequests"
}


export class DescribePendingAggregationRequestsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribePendingAggregationRequestsXAmzTargetEnum;
}


export class DescribePendingAggregationRequestsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribePendingAggregationRequestsQueryParams;

  @Metadata()
  headers: DescribePendingAggregationRequestsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribePendingAggregationRequestsRequest;
}


export class DescribePendingAggregationRequestsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describePendingAggregationRequestsResponse?: shared.DescribePendingAggregationRequestsResponse;

  @Metadata()
  invalidLimitException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  statusCode: number;
}
