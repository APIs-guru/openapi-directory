import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OAuthFlowTypeEnum } from "./oauthflowtypeenum";
import { AnalyticsConfigurationType } from "./analyticsconfigurationtype";
import { ExplicitAuthFlowsTypeEnum } from "./explicitauthflowstypeenum";
import { PreventUserExistenceErrorTypesEnum } from "./preventuserexistenceerrortypesenum";
import { TokenValidityUnitsType } from "./tokenvalidityunitstype";


// UserPoolClientType
/** 
 * Contains information about a user pool client.
**/
export class UserPoolClientType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessTokenValidity" })
  accessTokenValidity?: number;

  @Metadata({ data: "json, name=AllowedOAuthFlows" })
  allowedOAuthFlows?: OAuthFlowTypeEnum[];

  @Metadata({ data: "json, name=AllowedOAuthFlowsUserPoolClient" })
  allowedOAuthFlowsUserPoolClient?: boolean;

  @Metadata({ data: "json, name=AllowedOAuthScopes" })
  allowedOAuthScopes?: string[];

  @Metadata({ data: "json, name=AnalyticsConfiguration" })
  analyticsConfiguration?: AnalyticsConfigurationType;

  @Metadata({ data: "json, name=CallbackURLs" })
  callbackUrLs?: string[];

  @Metadata({ data: "json, name=ClientId" })
  clientId?: string;

  @Metadata({ data: "json, name=ClientName" })
  clientName?: string;

  @Metadata({ data: "json, name=ClientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=DefaultRedirectURI" })
  defaultRedirectUri?: string;

  @Metadata({ data: "json, name=EnableTokenRevocation" })
  enableTokenRevocation?: boolean;

  @Metadata({ data: "json, name=ExplicitAuthFlows" })
  explicitAuthFlows?: ExplicitAuthFlowsTypeEnum[];

  @Metadata({ data: "json, name=IdTokenValidity" })
  idTokenValidity?: number;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=LogoutURLs" })
  logoutUrLs?: string[];

  @Metadata({ data: "json, name=PreventUserExistenceErrors" })
  preventUserExistenceErrors?: PreventUserExistenceErrorTypesEnum;

  @Metadata({ data: "json, name=ReadAttributes" })
  readAttributes?: string[];

  @Metadata({ data: "json, name=RefreshTokenValidity" })
  refreshTokenValidity?: number;

  @Metadata({ data: "json, name=SupportedIdentityProviders" })
  supportedIdentityProviders?: string[];

  @Metadata({ data: "json, name=TokenValidityUnits" })
  tokenValidityUnits?: TokenValidityUnitsType;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId?: string;

  @Metadata({ data: "json, name=WriteAttributes" })
  writeAttributes?: string[];
}
