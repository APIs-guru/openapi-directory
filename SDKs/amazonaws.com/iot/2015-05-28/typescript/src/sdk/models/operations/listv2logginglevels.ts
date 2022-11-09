import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListV2LoggingLevelsTargetTypeEnum {
    Default = "DEFAULT"
,    ThingGroup = "THING_GROUP"
}


export class ListV2LoggingLevelsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=targetType" })
  targetType?: ListV2LoggingLevelsTargetTypeEnum;
}


export class ListV2LoggingLevelsHeaders extends SpeakeasyBase {
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


export class ListV2LoggingLevelsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListV2LoggingLevelsQueryParams;

  @Metadata()
  headers: ListV2LoggingLevelsHeaders;
}


export class ListV2LoggingLevelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listV2LoggingLevelsResponse?: shared.ListV2LoggingLevelsResponse;

  @Metadata()
  notConfiguredException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
