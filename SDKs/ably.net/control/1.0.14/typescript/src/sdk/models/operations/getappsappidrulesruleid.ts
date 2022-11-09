import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAppsAppIdRulesRuleIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rule_id" })
  ruleId: string;
}


export class GetAppsAppIdRulesRuleIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAppsAppIdRulesRuleIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAppsAppIdRulesRuleIdPathParams;

  @Metadata()
  security: GetAppsAppIdRulesRuleIdSecurity;
}


export class GetAppsAppIdRulesRuleIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  ruleResponse?: any;
}
