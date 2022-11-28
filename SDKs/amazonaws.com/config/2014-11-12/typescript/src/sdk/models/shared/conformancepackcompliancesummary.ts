import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";



// ConformancePackComplianceSummary
/** 
 * Summary includes the name and status of the conformance pack.
**/
export class ConformancePackComplianceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConformancePackComplianceStatus" })
  conformancePackComplianceStatus: ConformancePackComplianceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;
}
