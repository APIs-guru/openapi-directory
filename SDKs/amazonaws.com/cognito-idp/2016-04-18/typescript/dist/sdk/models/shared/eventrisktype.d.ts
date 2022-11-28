import { SpeakeasyBase } from "../../../internal/utils";
import { RiskDecisionTypeEnum } from "./riskdecisiontypeenum";
import { RiskLevelTypeEnum } from "./riskleveltypeenum";
/**
 * The event risk type.
**/
export declare class EventRiskType extends SpeakeasyBase {
    compromisedCredentialsDetected?: boolean;
    riskDecision?: RiskDecisionTypeEnum;
    riskLevel?: RiskLevelTypeEnum;
}
