import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeToLiveSpecification
/** 
 * Represents the settings used to enable or disable Time to Live (TTL) for the specified table.
**/
export class TimeToLiveSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled: boolean;
}
