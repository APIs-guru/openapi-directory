import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourceConfigHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum GetResourceConfigHistoryXAmzTargetEnum {
    StarlingDoveServiceGetResourceConfigHistory = "StarlingDoveService.GetResourceConfigHistory"
}


export class GetResourceConfigHistoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetResourceConfigHistoryXAmzTargetEnum;
}


export class GetResourceConfigHistoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResourceConfigHistoryQueryParams;

  @Metadata()
  headers: GetResourceConfigHistoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetResourceConfigHistoryRequest;
}


export class GetResourceConfigHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getResourceConfigHistoryResponse?: shared.GetResourceConfigHistoryResponse;

  @Metadata()
  invalidLimitException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidTimeRangeException?: any;

  @Metadata()
  noAvailableConfigurationRecorderException?: any;

  @Metadata()
  resourceNotDiscoveredException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
