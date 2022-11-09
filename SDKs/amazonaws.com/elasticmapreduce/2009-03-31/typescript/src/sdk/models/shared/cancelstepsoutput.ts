import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CancelStepsInfo } from "./cancelstepsinfo";


// CancelStepsOutput
/** 
 *  The output for the <a>CancelSteps</a> operation. 
**/
export class CancelStepsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CancelStepsInfoList", elemType: shared.CancelStepsInfo })
  cancelStepsInfoList?: CancelStepsInfo[];
}
