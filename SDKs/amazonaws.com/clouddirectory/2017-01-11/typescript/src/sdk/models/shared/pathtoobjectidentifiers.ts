import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PathToObjectIdentifiers
/** 
 * Returns the path to the <code>ObjectIdentifiers</code> that is associated with the directory.
**/
export class PathToObjectIdentifiers extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectIdentifiers" })
  objectIdentifiers?: string[];

  @Metadata({ data: "json, name=Path" })
  path?: string;
}
