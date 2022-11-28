import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObjectIdentifierAndLinkNameTuple
/** 
 * A pair of ObjectIdentifier and LinkName.
**/
export class ObjectIdentifierAndLinkNameTuple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LinkName" })
  linkName?: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;
}
