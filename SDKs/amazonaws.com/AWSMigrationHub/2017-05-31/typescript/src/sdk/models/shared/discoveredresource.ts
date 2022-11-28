import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DiscoveredResource
/** 
 * Object representing the on-premises resource being migrated.
**/
export class DiscoveredResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationId" })
  configurationId: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;
}
