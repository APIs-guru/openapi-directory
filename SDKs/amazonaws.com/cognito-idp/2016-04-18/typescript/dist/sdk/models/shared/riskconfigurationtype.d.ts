import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTakeoverRiskConfigurationType } from "./accounttakeoverriskconfigurationtype";
import { CompromisedCredentialsRiskConfigurationType } from "./compromisedcredentialsriskconfigurationtype";
import { RiskExceptionConfigurationType } from "./riskexceptionconfigurationtype";
/**
 * The risk configuration type.
**/
export declare class RiskConfigurationType extends SpeakeasyBase {
    accountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;
    clientId?: string;
    compromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;
    lastModifiedDate?: Date;
    riskExceptionConfiguration?: RiskExceptionConfigurationType;
    userPoolId?: string;
}
