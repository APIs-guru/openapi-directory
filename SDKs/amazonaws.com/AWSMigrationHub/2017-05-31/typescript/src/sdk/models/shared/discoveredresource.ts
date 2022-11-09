import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DiscoveredResource
/** 
 * Object representing the on-premises resource being migrated.
**/
export class DiscoveredResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationId" })
  configurationId: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;
}
