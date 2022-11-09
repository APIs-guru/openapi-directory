import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactData } from "./contactdata";
/**
 * <p/>
**/
export declare class ListContactsResponse extends SpeakeasyBase {
    contactList?: ContactData[];
    nextToken?: string;
}
