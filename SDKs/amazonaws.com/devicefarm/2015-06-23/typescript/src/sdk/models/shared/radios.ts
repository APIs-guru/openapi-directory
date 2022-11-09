import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Radios
/** 
 * Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC.
**/
export class Radios extends SpeakeasyBase {
  @Metadata({ data: "json, name=bluetooth" })
  bluetooth?: boolean;

  @Metadata({ data: "json, name=gps" })
  gps?: boolean;

  @Metadata({ data: "json, name=nfc" })
  nfc?: boolean;

  @Metadata({ data: "json, name=wifi" })
  wifi?: boolean;
}
