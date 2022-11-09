import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDiscoveredResourcesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListDiscoveredResourcesXAmzTargetEnum {
    StarlingDoveServiceListDiscoveredResources = "StarlingDoveService.ListDiscoveredResources"
}


export class ListDiscoveredResourcesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListDiscoveredResourcesXAmzTargetEnum;
}


export class ListDiscoveredResourcesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListDiscoveredResourcesQueryParams;

  @Metadata()
  headers: ListDiscoveredResourcesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListDiscoveredResourcesRequest;
}


export class ListDiscoveredResourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidLimitException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listDiscoveredResourcesResponse?: shared.ListDiscoveredResourcesResponse;

  @Metadata()
  noAvailableConfigurationRecorderException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
