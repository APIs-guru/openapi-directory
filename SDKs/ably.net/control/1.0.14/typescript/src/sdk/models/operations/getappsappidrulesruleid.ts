import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAppsAppIdRulesRuleIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rule_id" })
  ruleId: string;
}


export class GetAppsAppIdRulesRuleIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAppsAppIdRulesRuleIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAppsAppIdRulesRuleIdPathParams;

  @SpeakeasyMetadata()
  security: GetAppsAppIdRulesRuleIdSecurity;
}


export class GetAppsAppIdRulesRuleIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  ruleResponse?: any;
}
