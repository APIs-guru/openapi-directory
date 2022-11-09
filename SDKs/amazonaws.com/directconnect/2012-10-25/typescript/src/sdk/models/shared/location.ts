import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Location
/** 
 * Information about an Direct Connect location.
**/
export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableMacSecPortSpeeds" })
  availableMacSecPortSpeeds?: string[];

  @Metadata({ data: "json, name=availablePortSpeeds" })
  availablePortSpeeds?: string[];

  @Metadata({ data: "json, name=availableProviders" })
  availableProviders?: string[];

  @Metadata({ data: "json, name=locationCode" })
  locationCode?: string;

  @Metadata({ data: "json, name=locationName" })
  locationName?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;
}
