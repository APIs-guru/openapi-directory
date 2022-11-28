import { SpeakeasyBase } from "../../../internal/utils";
import { OAuthFlowTypeEnum } from "./oauthflowtypeenum";
import { AnalyticsConfigurationType } from "./analyticsconfigurationtype";
import { ExplicitAuthFlowsTypeEnum } from "./explicitauthflowstypeenum";
import { PreventUserExistenceErrorTypesEnum } from "./preventuserexistenceerrortypesenum";
import { TokenValidityUnitsType } from "./tokenvalidityunitstype";
/**
 * Represents the request to update the user pool client.
**/
export declare class UpdateUserPoolClientRequest extends SpeakeasyBase {
    accessTokenValidity?: number;
    allowedOAuthFlows?: OAuthFlowTypeEnum[];
    allowedOAuthFlowsUserPoolClient?: boolean;
    allowedOAuthScopes?: string[];
    analyticsConfiguration?: AnalyticsConfigurationType;
    callbackUrLs?: string[];
    clientId: string;
    clientName?: string;
    defaultRedirectUri?: string;
    enableTokenRevocation?: boolean;
    explicitAuthFlows?: ExplicitAuthFlowsTypeEnum[];
    idTokenValidity?: number;
    logoutUrLs?: string[];
    preventUserExistenceErrors?: PreventUserExistenceErrorTypesEnum;
    readAttributes?: string[];
    refreshTokenValidity?: number;
    supportedIdentityProviders?: string[];
    tokenValidityUnits?: TokenValidityUnitsType;
    userPoolId: string;
    writeAttributes?: string[];
}
