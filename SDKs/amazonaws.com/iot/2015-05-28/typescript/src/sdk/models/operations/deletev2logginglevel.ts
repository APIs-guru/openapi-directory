import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeleteV2LoggingLevelTargetTypeEnum {
    Default = "DEFAULT",
    ThingGroup = "THING_GROUP"
}


export class DeleteV2LoggingLevelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=targetName" })
  targetName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=targetType" })
  targetType: DeleteV2LoggingLevelTargetTypeEnum;
}


export class DeleteV2LoggingLevelHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class DeleteV2LoggingLevelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteV2LoggingLevelQueryParams;

  @SpeakeasyMetadata()
  headers: DeleteV2LoggingLevelHeaders;
}


export class DeleteV2LoggingLevelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
