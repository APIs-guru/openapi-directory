import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateTopicRulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleName" })
  ruleName: string;
}


export class CreateTopicRuleHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-tagging" })
  xAmzTagging?: string;
}


// CreateTopicRuleRequestBodyTopicRulePayload
/** 
 * Describes a rule.
**/
export class CreateTopicRuleRequestBodyTopicRulePayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.Action })
  actions?: shared.Action[];

  @SpeakeasyMetadata({ data: "json, name=awsIotSqlVersion" })
  awsIotSqlVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=errorAction" })
  errorAction?: shared.Action;

  @SpeakeasyMetadata({ data: "json, name=ruleDisabled" })
  ruleDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql?: string;
}


export class CreateTopicRuleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topicRulePayload" })
  topicRulePayload: CreateTopicRuleRequestBodyTopicRulePayload;
}


export class CreateTopicRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateTopicRulePathParams;

  @SpeakeasyMetadata()
  headers: CreateTopicRuleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateTopicRuleRequestBody;
}


export class CreateTopicRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictingResourceUpdateException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  sqlParseException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
