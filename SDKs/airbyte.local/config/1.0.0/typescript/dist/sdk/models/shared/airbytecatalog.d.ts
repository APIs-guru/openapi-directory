import { SpeakeasyBase } from "../../../internal/utils";
import { AirbyteStreamAndConfiguration } from "./airbytestreamandconfiguration";
/**
 * describes the available schema (catalog).
**/
export declare class AirbyteCatalog extends SpeakeasyBase {
    streams: AirbyteStreamAndConfiguration[];
}
