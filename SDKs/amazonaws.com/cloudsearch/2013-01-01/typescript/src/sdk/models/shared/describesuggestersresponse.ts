import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuggesterStatus } from "./suggesterstatus";



// DescribeSuggestersResponse
/** 
 * The result of a <code>DescribeSuggesters</code> request.
**/
export class DescribeSuggestersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: SuggesterStatus })
  suggesters: SuggesterStatus[];
}
