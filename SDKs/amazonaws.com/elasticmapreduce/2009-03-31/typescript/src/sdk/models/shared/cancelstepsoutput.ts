import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CancelStepsInfo } from "./cancelstepsinfo";



// CancelStepsOutput
/** 
 *  The output for the <a>CancelSteps</a> operation. 
**/
export class CancelStepsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CancelStepsInfoList", elemType: CancelStepsInfo })
  cancelStepsInfoList?: CancelStepsInfo[];
}
