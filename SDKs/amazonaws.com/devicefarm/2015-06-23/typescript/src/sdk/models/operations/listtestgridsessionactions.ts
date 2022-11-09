import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTestGridSessionActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResult" })
  maxResult?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListTestGridSessionActionsXAmzTargetEnum {
    DeviceFarm20150623ListTestGridSessionActions = "DeviceFarm_20150623.ListTestGridSessionActions"
}


export class ListTestGridSessionActionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTestGridSessionActionsXAmzTargetEnum;
}


export class ListTestGridSessionActionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListTestGridSessionActionsQueryParams;

  @Metadata()
  headers: ListTestGridSessionActionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTestGridSessionActionsRequest;
}


export class ListTestGridSessionActionsResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  listTestGridSessionActionsResult?: shared.ListTestGridSessionActionsResult;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}
