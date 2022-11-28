import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventContextDataType
/** 
 * Specifies the user context data captured at the time of an event request.
**/
export class EventContextDataType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=Timezone" })
  timezone?: string;
}
