import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAggregateDiscoveredResourcesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListAggregateDiscoveredResourcesXAmzTargetEnum {
    StarlingDoveServiceListAggregateDiscoveredResources = "StarlingDoveService.ListAggregateDiscoveredResources"
}


export class ListAggregateDiscoveredResourcesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAggregateDiscoveredResourcesXAmzTargetEnum;
}


export class ListAggregateDiscoveredResourcesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAggregateDiscoveredResourcesQueryParams;

  @Metadata()
  headers: ListAggregateDiscoveredResourcesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAggregateDiscoveredResourcesRequest;
}


export class ListAggregateDiscoveredResourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidLimitException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listAggregateDiscoveredResourcesResponse?: shared.ListAggregateDiscoveredResourcesResponse;

  @Metadata()
  noSuchConfigurationAggregatorException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
