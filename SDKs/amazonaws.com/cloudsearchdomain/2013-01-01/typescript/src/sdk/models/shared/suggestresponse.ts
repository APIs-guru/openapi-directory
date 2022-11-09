import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SuggestStatus } from "./suggeststatus";
import { SuggestModel } from "./suggestmodel";


// SuggestResponse
/** 
 * Contains the response to a <code>Suggest</code> request.
**/
export class SuggestResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: SuggestStatus;

  @Metadata({ data: "json, name=suggest" })
  suggest?: SuggestModel;
}
