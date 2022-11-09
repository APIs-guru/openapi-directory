import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RiskDecisionTypeEnum } from "./riskdecisiontypeenum";
import { RiskLevelTypeEnum } from "./riskleveltypeenum";


// EventRiskType
/** 
 * The event risk type.
**/
export class EventRiskType extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompromisedCredentialsDetected" })
  compromisedCredentialsDetected?: boolean;

  @Metadata({ data: "json, name=RiskDecision" })
  riskDecision?: RiskDecisionTypeEnum;

  @Metadata({ data: "json, name=RiskLevel" })
  riskLevel?: RiskLevelTypeEnum;
}
