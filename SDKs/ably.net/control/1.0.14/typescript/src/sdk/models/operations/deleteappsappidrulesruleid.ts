import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAppsAppIdRulesRuleIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rule_id" })
  ruleId: string;
}


export class DeleteAppsAppIdRulesRuleIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteAppsAppIdRulesRuleIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAppsAppIdRulesRuleIdPathParams;

  @Metadata()
  security: DeleteAppsAppIdRulesRuleIdSecurity;
}


export class DeleteAppsAppIdRulesRuleIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;
}
