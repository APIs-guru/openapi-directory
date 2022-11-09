import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountTakeoverRiskConfigurationType } from "./accounttakeoverriskconfigurationtype";
import { CompromisedCredentialsRiskConfigurationType } from "./compromisedcredentialsriskconfigurationtype";
import { RiskExceptionConfigurationType } from "./riskexceptionconfigurationtype";


export class SetRiskConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountTakeoverRiskConfiguration" })
  accountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;

  @Metadata({ data: "json, name=ClientId" })
  clientId?: string;

  @Metadata({ data: "json, name=CompromisedCredentialsRiskConfiguration" })
  compromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;

  @Metadata({ data: "json, name=RiskExceptionConfiguration" })
  riskExceptionConfiguration?: RiskExceptionConfigurationType;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
