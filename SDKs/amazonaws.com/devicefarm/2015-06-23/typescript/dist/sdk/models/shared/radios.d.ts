import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC.
**/
export declare class Radios extends SpeakeasyBase {
    bluetooth?: boolean;
    gps?: boolean;
    nfc?: boolean;
    wifi?: boolean;
}
