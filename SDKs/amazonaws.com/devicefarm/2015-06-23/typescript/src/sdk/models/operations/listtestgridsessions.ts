import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTestGridSessionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResult" })
  maxResult?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListTestGridSessionsXAmzTargetEnum {
    DeviceFarm20150623ListTestGridSessions = "DeviceFarm_20150623.ListTestGridSessions"
}


export class ListTestGridSessionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTestGridSessionsXAmzTargetEnum;
}


export class ListTestGridSessionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListTestGridSessionsQueryParams;

  @Metadata()
  headers: ListTestGridSessionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTestGridSessionsRequest;
}


export class ListTestGridSessionsResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  listTestGridSessionsResult?: shared.ListTestGridSessionsResult;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}
