import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateNotificationRuleHeaders extends SpeakeasyBase {
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

export enum UpdateNotificationRuleRequestBodyDetailTypeEnum {
    Basic = "BASIC",
    Full = "FULL"
}

export enum UpdateNotificationRuleRequestBodyStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}


export class UpdateNotificationRuleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=DetailType" })
  detailType?: UpdateNotificationRuleRequestBodyDetailTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EventTypeIds" })
  eventTypeIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: UpdateNotificationRuleRequestBodyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: shared.Target })
  targets?: shared.Target[];
}


export class UpdateNotificationRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateNotificationRuleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateNotificationRuleRequestBody;
}


export class UpdateNotificationRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNotificationRuleResult?: Map<string, any>;

  @SpeakeasyMetadata()
  validationException?: any;
}
