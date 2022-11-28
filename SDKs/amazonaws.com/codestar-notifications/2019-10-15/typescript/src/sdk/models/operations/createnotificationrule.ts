import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateNotificationRuleHeaders extends SpeakeasyBase {
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

export enum CreateNotificationRuleRequestBodyDetailTypeEnum {
    Basic = "BASIC",
    Full = "FULL"
}

export enum CreateNotificationRuleRequestBodyStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}


export class CreateNotificationRuleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=DetailType" })
  detailType: CreateNotificationRuleRequestBodyDetailTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EventTypeIds" })
  eventTypeIds: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: CreateNotificationRuleRequestBodyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: shared.Target })
  targets: shared.Target[];
}


export class CreateNotificationRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateNotificationRuleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNotificationRuleRequestBody;
}


export class CreateNotificationRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  configurationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createNotificationRuleResult?: shared.CreateNotificationRuleResult;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
