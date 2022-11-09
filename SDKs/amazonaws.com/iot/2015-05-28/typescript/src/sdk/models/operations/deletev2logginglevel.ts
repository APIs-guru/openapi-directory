import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeleteV2LoggingLevelTargetTypeEnum {
    Default = "DEFAULT"
,    ThingGroup = "THING_GROUP"
}


export class DeleteV2LoggingLevelQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=targetName" })
  targetName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=targetType" })
  targetType: DeleteV2LoggingLevelTargetTypeEnum;
}


export class DeleteV2LoggingLevelHeaders extends SpeakeasyBase {
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


export class DeleteV2LoggingLevelRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteV2LoggingLevelQueryParams;

  @Metadata()
  headers: DeleteV2LoggingLevelHeaders;
}


export class DeleteV2LoggingLevelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
