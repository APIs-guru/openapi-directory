import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteEvaluationResultsRequest
/** 
 * <p/>
**/
export class DeleteEvaluationResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;
}
