import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Radios
/** 
 * Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC.
**/
export class Radios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bluetooth" })
  bluetooth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=gps" })
  gps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nfc" })
  nfc?: boolean;

  @SpeakeasyMetadata({ data: "json, name=wifi" })
  wifi?: boolean;
}
