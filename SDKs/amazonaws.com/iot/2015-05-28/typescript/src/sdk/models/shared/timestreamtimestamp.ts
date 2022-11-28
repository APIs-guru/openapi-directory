import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimestreamTimestamp
/** 
 * Describes how to interpret an application-defined timestamp value from an MQTT message payload and the precision of that value.
**/
export class TimestreamTimestamp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
