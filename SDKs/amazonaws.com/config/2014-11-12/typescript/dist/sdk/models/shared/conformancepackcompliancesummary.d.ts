import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";
/**
 * Summary includes the name and status of the conformance pack.
**/
export declare class ConformancePackComplianceSummary extends SpeakeasyBase {
    conformancePackComplianceStatus: ConformancePackComplianceTypeEnum;
    conformancePackName: string;
}
