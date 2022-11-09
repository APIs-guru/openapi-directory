import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Destination } from "./destination";
import { Source } from "./source";


// DataflowDetail
/** 
 * Information about a dataflow edge used in a contact.
**/
export class DataflowDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: Destination;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=source" })
  source?: Source;
}
