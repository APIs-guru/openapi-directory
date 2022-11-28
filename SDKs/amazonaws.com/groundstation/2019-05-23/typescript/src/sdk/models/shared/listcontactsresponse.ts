import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactData } from "./contactdata";



// ListContactsResponse
/** 
 * <p/>
**/
export class ListContactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactList", elemType: ContactData })
  contactList?: ContactData[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
