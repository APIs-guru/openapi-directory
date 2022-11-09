import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListGroundStationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=satelliteId" })
  satelliteId?: string;
}


export class ListGroundStationsHeaders extends SpeakeasyBase {
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


export class ListGroundStationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListGroundStationsQueryParams;

  @Metadata()
  headers: ListGroundStationsHeaders;
}


export class ListGroundStationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dependencyException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  listGroundStationsResponse?: shared.ListGroundStationsResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
