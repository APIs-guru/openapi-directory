import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegistryCatalogData
/** 
 * The metadata for a public registry.
**/
export class RegistryCatalogData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
