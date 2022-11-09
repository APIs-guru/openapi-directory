import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateNotificationRuleHeaders extends SpeakeasyBase {
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

export enum UpdateNotificationRuleRequestBodyDetailTypeEnum {
    Basic = "BASIC"
,    Full = "FULL"
}

export enum UpdateNotificationRuleRequestBodyStatusEnum {
    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}


export class UpdateNotificationRuleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=DetailType" })
  detailType?: UpdateNotificationRuleRequestBodyDetailTypeEnum;

  @Metadata({ data: "json, name=EventTypeIds" })
  eventTypeIds?: string[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: UpdateNotificationRuleRequestBodyStatusEnum;

  @Metadata({ data: "json, name=Targets", elemType: shared.Target })
  targets?: shared.Target[];
}


export class UpdateNotificationRuleRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateNotificationRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateNotificationRuleRequestBody;
}


export class UpdateNotificationRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNotificationRuleResult?: Map<string, any>;

  @Metadata()
  validationException?: any;
}
