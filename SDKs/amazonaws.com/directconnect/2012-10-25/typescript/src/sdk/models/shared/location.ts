import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Location
/** 
 * Information about an Direct Connect location.
**/
export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableMacSecPortSpeeds" })
  availableMacSecPortSpeeds?: string[];

  @SpeakeasyMetadata({ data: "json, name=availablePortSpeeds" })
  availablePortSpeeds?: string[];

  @SpeakeasyMetadata({ data: "json, name=availableProviders" })
  availableProviders?: string[];

  @SpeakeasyMetadata({ data: "json, name=locationCode" })
  locationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=locationName" })
  locationName?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;
}
