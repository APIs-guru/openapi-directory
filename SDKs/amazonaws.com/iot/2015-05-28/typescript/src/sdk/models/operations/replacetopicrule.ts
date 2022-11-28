import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReplaceTopicRulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleName" })
  ruleName: string;
}


export class ReplaceTopicRuleHeaders extends SpeakeasyBase {
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


// ReplaceTopicRuleRequestBodyTopicRulePayload
/** 
 * Describes a rule.
**/
export class ReplaceTopicRuleRequestBodyTopicRulePayload extends SpeakeasyBase {
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


export class ReplaceTopicRuleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topicRulePayload" })
  topicRulePayload: ReplaceTopicRuleRequestBodyTopicRulePayload;
}


export class ReplaceTopicRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReplaceTopicRulePathParams;

  @SpeakeasyMetadata()
  headers: ReplaceTopicRuleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ReplaceTopicRuleRequestBody;
}


export class ReplaceTopicRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictingResourceUpdateException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  sqlParseException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
