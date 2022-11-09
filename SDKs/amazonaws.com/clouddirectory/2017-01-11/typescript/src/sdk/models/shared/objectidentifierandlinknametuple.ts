import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObjectIdentifierAndLinkNameTuple
/** 
 * A pair of ObjectIdentifier and LinkName.
**/
export class ObjectIdentifierAndLinkNameTuple extends SpeakeasyBase {
  @Metadata({ data: "json, name=LinkName" })
  linkName?: string;

  @Metadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;
}
