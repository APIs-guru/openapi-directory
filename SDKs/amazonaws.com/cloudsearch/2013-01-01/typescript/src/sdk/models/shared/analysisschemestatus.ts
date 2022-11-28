import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalysisScheme } from "./analysisscheme";
import { OptionStatus } from "./optionstatus";



// AnalysisSchemeStatus
/** 
 * The status and configuration of an <code>AnalysisScheme</code>.
**/
export class AnalysisSchemeStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  options: AnalysisScheme;

  @SpeakeasyMetadata()
  status: OptionStatus;
}
