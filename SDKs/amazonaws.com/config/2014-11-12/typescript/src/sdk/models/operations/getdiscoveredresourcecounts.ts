import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDiscoveredResourceCountsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum GetDiscoveredResourceCountsXAmzTargetEnum {
    StarlingDoveServiceGetDiscoveredResourceCounts = "StarlingDoveService.GetDiscoveredResourceCounts"
}


export class GetDiscoveredResourceCountsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDiscoveredResourceCountsXAmzTargetEnum;
}


export class GetDiscoveredResourceCountsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDiscoveredResourceCountsQueryParams;

  @Metadata()
  headers: GetDiscoveredResourceCountsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetDiscoveredResourceCountsRequest;
}


export class GetDiscoveredResourceCountsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDiscoveredResourceCountsResponse?: shared.GetDiscoveredResourceCountsResponse;

  @Metadata()
  invalidLimitException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
