import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegistryCatalogData
/** 
 * The metadata for a public registry.
**/
export class RegistryCatalogData extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}
