import { SpeakeasyBase } from "../../../internal/utils";
import { OAuthFlowTypeEnum } from "./oauthflowtypeenum";
import { AnalyticsConfigurationType } from "./analyticsconfigurationtype";
import { ExplicitAuthFlowsTypeEnum } from "./explicitauthflowstypeenum";
import { PreventUserExistenceErrorTypesEnum } from "./preventuserexistenceerrortypesenum";
import { TokenValidityUnitsType } from "./tokenvalidityunitstype";
/**
 * Contains information about a user pool client.
**/
export declare class UserPoolClientType extends SpeakeasyBase {
    accessTokenValidity?: number;
    allowedOAuthFlows?: OAuthFlowTypeEnum[];
    allowedOAuthFlowsUserPoolClient?: boolean;
    allowedOAuthScopes?: string[];
    analyticsConfiguration?: AnalyticsConfigurationType;
    callbackUrLs?: string[];
    clientId?: string;
    clientName?: string;
    clientSecret?: string;
    creationDate?: Date;
    defaultRedirectUri?: string;
    enableTokenRevocation?: boolean;
    explicitAuthFlows?: ExplicitAuthFlowsTypeEnum[];
    idTokenValidity?: number;
    lastModifiedDate?: Date;
    logoutUrLs?: string[];
    preventUserExistenceErrors?: PreventUserExistenceErrorTypesEnum;
    readAttributes?: string[];
    refreshTokenValidity?: number;
    supportedIdentityProviders?: string[];
    tokenValidityUnits?: TokenValidityUnitsType;
    userPoolId?: string;
    writeAttributes?: string[];
}
