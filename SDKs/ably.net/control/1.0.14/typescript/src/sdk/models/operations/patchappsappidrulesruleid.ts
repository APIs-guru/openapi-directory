import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchAppsAppIdRulesRuleIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rule_id" })
  ruleId: string;
}


export class PatchAppsAppIdRulesRuleIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PatchAppsAppIdRulesRuleIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchAppsAppIdRulesRuleIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PatchAppsAppIdRulesRuleIdSecurity;
}


export class PatchAppsAppIdRulesRuleIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  ruleResponse?: any;
}
