import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuggestStatus } from "./suggeststatus";
import { SuggestModel } from "./suggestmodel";



// SuggestResponse
/** 
 * Contains the response to a <code>Suggest</code> request.
**/
export class SuggestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SuggestStatus;

  @SpeakeasyMetadata({ data: "json, name=suggest" })
  suggest?: SuggestModel;
}
