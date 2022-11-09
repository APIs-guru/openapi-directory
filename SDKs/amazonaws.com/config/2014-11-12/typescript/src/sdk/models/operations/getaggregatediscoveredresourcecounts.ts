import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAggregateDiscoveredResourceCountsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetAggregateDiscoveredResourceCountsXAmzTargetEnum {
    StarlingDoveServiceGetAggregateDiscoveredResourceCounts = "StarlingDoveService.GetAggregateDiscoveredResourceCounts"
}


export class GetAggregateDiscoveredResourceCountsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetAggregateDiscoveredResourceCountsXAmzTargetEnum;
}


export class GetAggregateDiscoveredResourceCountsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAggregateDiscoveredResourceCountsQueryParams;

  @Metadata()
  headers: GetAggregateDiscoveredResourceCountsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetAggregateDiscoveredResourceCountsRequest;
}


export class GetAggregateDiscoveredResourceCountsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAggregateDiscoveredResourceCountsResponse?: shared.GetAggregateDiscoveredResourceCountsResponse;

  @Metadata()
  invalidLimitException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  noSuchConfigurationAggregatorException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
