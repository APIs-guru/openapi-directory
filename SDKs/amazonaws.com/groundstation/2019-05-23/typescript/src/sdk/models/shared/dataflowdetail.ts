import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { Source } from "./source";



// DataflowDetail
/** 
 * Information about a dataflow edge used in a contact.
**/
export class DataflowDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: Destination;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;
}
