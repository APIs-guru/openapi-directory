import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";


// ConformancePackComplianceSummary
/** 
 * Summary includes the name and status of the conformance pack.
**/
export class ConformancePackComplianceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConformancePackComplianceStatus" })
  conformancePackComplianceStatus: ConformancePackComplianceTypeEnum;

  @Metadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;
}
