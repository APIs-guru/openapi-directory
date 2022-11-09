import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Core } from "./core";


// CoreDefinitionVersion
/** 
 * Information about a core definition version.
**/
export class CoreDefinitionVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Cores", elemType: shared.Core })
  cores?: Core[];
}
