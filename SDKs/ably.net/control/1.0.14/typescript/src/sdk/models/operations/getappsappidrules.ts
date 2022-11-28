import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAppsAppIdRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}


export class GetAppsAppIdRulesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAppsAppIdRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAppsAppIdRulesPathParams;

  @SpeakeasyMetadata()
  security: GetAppsAppIdRulesSecurity;
}


export class GetAppsAppIdRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  ruleResponses?: any[];
}
