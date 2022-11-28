import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinationConfig
/** 
 * The destination configuration.
**/
export class DestinationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=services" })
  services: string[];

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName?: string;
}
