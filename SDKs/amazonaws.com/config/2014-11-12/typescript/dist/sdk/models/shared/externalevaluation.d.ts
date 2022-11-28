import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";
/**
 * Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against.
**/
export declare class ExternalEvaluation extends SpeakeasyBase {
    annotation?: string;
    complianceResourceId: string;
    complianceResourceType: string;
    complianceType: ComplianceTypeEnum;
    orderingTimestamp: Date;
}
