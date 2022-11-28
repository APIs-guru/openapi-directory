import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchAppsAppIdRulesRuleIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rule_id" })
  ruleId: string;
}


export class PatchAppsAppIdRulesRuleIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PatchAppsAppIdRulesRuleIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchAppsAppIdRulesRuleIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: PatchAppsAppIdRulesRuleIdSecurity;
}


export class PatchAppsAppIdRulesRuleIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  ruleResponse?: any;
}
