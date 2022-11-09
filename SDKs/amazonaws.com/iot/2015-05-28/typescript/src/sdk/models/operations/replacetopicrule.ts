import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReplaceTopicRulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ruleName" })
  ruleName: string;
}


export class ReplaceTopicRuleHeaders extends SpeakeasyBase {
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


// ReplaceTopicRuleRequestBodyTopicRulePayload
/** 
 * Describes a rule.
**/
export class ReplaceTopicRuleRequestBodyTopicRulePayload extends SpeakeasyBase {
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


export class ReplaceTopicRuleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=topicRulePayload" })
  topicRulePayload: ReplaceTopicRuleRequestBodyTopicRulePayload;
}


export class ReplaceTopicRuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReplaceTopicRulePathParams;

  @Metadata()
  headers: ReplaceTopicRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ReplaceTopicRuleRequestBody;
}


export class ReplaceTopicRuleResponse extends SpeakeasyBase {
  @Metadata()
  conflictingResourceUpdateException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  sqlParseException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
