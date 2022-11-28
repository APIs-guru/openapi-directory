import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAggregateDiscoveredResourcesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListAggregateDiscoveredResourcesXAmzTargetEnum {
    StarlingDoveServiceListAggregateDiscoveredResources = "StarlingDoveService.ListAggregateDiscoveredResources"
}


export class ListAggregateDiscoveredResourcesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAggregateDiscoveredResourcesXAmzTargetEnum;
}


export class ListAggregateDiscoveredResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAggregateDiscoveredResourcesQueryParams;

  @SpeakeasyMetadata()
  headers: ListAggregateDiscoveredResourcesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListAggregateDiscoveredResourcesRequest;
}


export class ListAggregateDiscoveredResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidLimitException?: any;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  listAggregateDiscoveredResourcesResponse?: shared.ListAggregateDiscoveredResourcesResponse;

  @SpeakeasyMetadata()
  noSuchConfigurationAggregatorException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
