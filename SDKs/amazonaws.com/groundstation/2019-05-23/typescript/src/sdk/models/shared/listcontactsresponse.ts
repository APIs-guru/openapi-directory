import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContactData } from "./contactdata";


// ListContactsResponse
/** 
 * <p/>
**/
export class ListContactsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactList", elemType: shared.ContactData })
  contactList?: ContactData[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
