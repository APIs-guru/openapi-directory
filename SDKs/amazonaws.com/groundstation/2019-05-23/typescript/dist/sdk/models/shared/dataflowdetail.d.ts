import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { Source } from "./source";
/**
 * Information about a dataflow edge used in a contact.
**/
export declare class DataflowDetail extends SpeakeasyBase {
    destination?: Destination;
    errorMessage?: string;
    source?: Source;
}
