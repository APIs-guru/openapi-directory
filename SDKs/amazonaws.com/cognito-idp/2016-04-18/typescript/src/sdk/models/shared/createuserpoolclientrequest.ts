import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OAuthFlowTypeEnum } from "./oauthflowtypeenum";
import { AnalyticsConfigurationType } from "./analyticsconfigurationtype";
import { ExplicitAuthFlowsTypeEnum } from "./explicitauthflowstypeenum";
import { PreventUserExistenceErrorTypesEnum } from "./preventuserexistenceerrortypesenum";
import { TokenValidityUnitsType } from "./tokenvalidityunitstype";



// CreateUserPoolClientRequest
/** 
 * Represents the request to create a user pool client.
**/
export class CreateUserPoolClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessTokenValidity" })
  accessTokenValidity?: number;

  @SpeakeasyMetadata({ data: "json, name=AllowedOAuthFlows" })
  allowedOAuthFlows?: OAuthFlowTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=AllowedOAuthFlowsUserPoolClient" })
  allowedOAuthFlowsUserPoolClient?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AllowedOAuthScopes" })
  allowedOAuthScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=AnalyticsConfiguration" })
  analyticsConfiguration?: AnalyticsConfigurationType;

  @SpeakeasyMetadata({ data: "json, name=CallbackURLs" })
  callbackUrLs?: string[];

  @SpeakeasyMetadata({ data: "json, name=ClientName" })
  clientName: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultRedirectURI" })
  defaultRedirectUri?: string;

  @SpeakeasyMetadata({ data: "json, name=EnableTokenRevocation" })
  enableTokenRevocation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExplicitAuthFlows" })
  explicitAuthFlows?: ExplicitAuthFlowsTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=GenerateSecret" })
  generateSecret?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IdTokenValidity" })
  idTokenValidity?: number;

  @SpeakeasyMetadata({ data: "json, name=LogoutURLs" })
  logoutUrLs?: string[];

  @SpeakeasyMetadata({ data: "json, name=PreventUserExistenceErrors" })
  preventUserExistenceErrors?: PreventUserExistenceErrorTypesEnum;

  @SpeakeasyMetadata({ data: "json, name=ReadAttributes" })
  readAttributes?: string[];

  @SpeakeasyMetadata({ data: "json, name=RefreshTokenValidity" })
  refreshTokenValidity?: number;

  @SpeakeasyMetadata({ data: "json, name=SupportedIdentityProviders" })
  supportedIdentityProviders?: string[];

  @SpeakeasyMetadata({ data: "json, name=TokenValidityUnits" })
  tokenValidityUnits?: TokenValidityUnitsType;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=WriteAttributes" })
  writeAttributes?: string[];
}
