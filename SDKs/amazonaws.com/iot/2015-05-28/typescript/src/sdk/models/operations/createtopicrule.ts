import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTopicRulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ruleName" })
  ruleName: string;
}


export class CreateTopicRuleHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-tagging" })
  xAmzTagging?: string;
}


// CreateTopicRuleRequestBodyTopicRulePayload
/** 
 * Describes a rule.
**/
export class CreateTopicRuleRequestBodyTopicRulePayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.Action })
  actions?: shared.Action[];

  @Metadata({ data: "json, name=awsIotSqlVersion" })
  awsIotSqlVersion?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=errorAction" })
  errorAction?: shared.Action;

  @Metadata({ data: "json, name=ruleDisabled" })
  ruleDisabled?: boolean;

  @Metadata({ data: "json, name=sql" })
  sql?: string;
}


export class CreateTopicRuleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=topicRulePayload" })
  topicRulePayload: CreateTopicRuleRequestBodyTopicRulePayload;
}


export class CreateTopicRuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateTopicRulePathParams;

  @Metadata()
  headers: CreateTopicRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateTopicRuleRequestBody;
}


export class CreateTopicRuleResponse extends SpeakeasyBase {
  @Metadata()
  conflictingResourceUpdateException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  sqlParseException?: any;

  @Metadata()
  statusCode: number;
}
