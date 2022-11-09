import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateNotificationRuleHeaders extends SpeakeasyBase {
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

export enum CreateNotificationRuleRequestBodyDetailTypeEnum {
    Basic = "BASIC"
,    Full = "FULL"
}

export enum CreateNotificationRuleRequestBodyStatusEnum {
    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}


export class CreateNotificationRuleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=DetailType" })
  detailType: CreateNotificationRuleRequestBodyDetailTypeEnum;

  @Metadata({ data: "json, name=EventTypeIds" })
  eventTypeIds: string[];

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Resource" })
  resource: string;

  @Metadata({ data: "json, name=Status" })
  status?: CreateNotificationRuleRequestBodyStatusEnum;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=Targets", elemType: shared.Target })
  targets: shared.Target[];
}


export class CreateNotificationRuleRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateNotificationRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNotificationRuleRequestBody;
}


export class CreateNotificationRuleResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  configurationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createNotificationRuleResult?: shared.CreateNotificationRuleResult;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
