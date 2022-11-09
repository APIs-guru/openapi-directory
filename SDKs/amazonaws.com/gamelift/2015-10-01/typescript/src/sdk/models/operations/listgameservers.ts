import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListGameServersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListGameServersXAmzTargetEnum {
    GameLiftListGameServers = "GameLift.ListGameServers"
}


export class ListGameServersHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListGameServersXAmzTargetEnum;
}


export class ListGameServersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListGameServersQueryParams;

  @Metadata()
  headers: ListGameServersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListGameServersInput;
}


export class ListGameServersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listGameServersOutput?: shared.ListGameServersOutput;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
