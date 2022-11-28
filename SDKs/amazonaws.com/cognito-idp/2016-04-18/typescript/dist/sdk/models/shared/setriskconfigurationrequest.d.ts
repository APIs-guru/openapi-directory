import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTakeoverRiskConfigurationType } from "./accounttakeoverriskconfigurationtype";
import { CompromisedCredentialsRiskConfigurationType } from "./compromisedcredentialsriskconfigurationtype";
import { RiskExceptionConfigurationType } from "./riskexceptionconfigurationtype";
export declare class SetRiskConfigurationRequest extends SpeakeasyBase {
    accountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;
    clientId?: string;
    compromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;
    riskExceptionConfiguration?: RiskExceptionConfigurationType;
    userPoolId: string;
}
