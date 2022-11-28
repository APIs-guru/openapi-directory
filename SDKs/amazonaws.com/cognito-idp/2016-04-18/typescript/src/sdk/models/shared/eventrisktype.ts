import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RiskDecisionTypeEnum } from "./riskdecisiontypeenum";
import { RiskLevelTypeEnum } from "./riskleveltypeenum";



// EventRiskType
/** 
 * The event risk type.
**/
export class EventRiskType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompromisedCredentialsDetected" })
  compromisedCredentialsDetected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RiskDecision" })
  riskDecision?: RiskDecisionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=RiskLevel" })
  riskLevel?: RiskLevelTypeEnum;
}
