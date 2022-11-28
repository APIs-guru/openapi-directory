import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountTakeoverRiskConfigurationType } from "./accounttakeoverriskconfigurationtype";
import { CompromisedCredentialsRiskConfigurationType } from "./compromisedcredentialsriskconfigurationtype";
import { RiskExceptionConfigurationType } from "./riskexceptionconfigurationtype";



// RiskConfigurationType
/** 
 * The risk configuration type.
**/
export class RiskConfigurationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountTakeoverRiskConfiguration" })
  accountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=CompromisedCredentialsRiskConfiguration" })
  compromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=RiskExceptionConfiguration" })
  riskExceptionConfiguration?: RiskExceptionConfigurationType;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId?: string;
}
