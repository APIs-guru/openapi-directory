import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListSatellitesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListSatellitesHeaders extends SpeakeasyBase {
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
}


export class ListSatellitesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListSatellitesQueryParams;

  @Metadata()
  headers: ListSatellitesHeaders;
}


export class ListSatellitesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dependencyException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  listSatellitesResponse?: shared.ListSatellitesResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
