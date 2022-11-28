import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PathToObjectIdentifiers
/** 
 * Returns the path to the <code>ObjectIdentifiers</code> that is associated with the directory.
**/
export class PathToObjectIdentifiers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectIdentifiers" })
  objectIdentifiers?: string[];

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;
}
