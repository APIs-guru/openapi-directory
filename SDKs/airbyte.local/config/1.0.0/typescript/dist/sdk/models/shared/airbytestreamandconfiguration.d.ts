import { SpeakeasyBase } from "../../../internal/utils";
import { AirbyteStreamConfiguration } from "./airbytestreamconfiguration";
import { AirbyteStream } from "./airbytestream";
/**
 * each stream is split in two parts; the immutable schema from source and mutable configuration for destination
**/
export declare class AirbyteStreamAndConfiguration extends SpeakeasyBase {
    config?: AirbyteStreamConfiguration;
    stream?: AirbyteStream;
}
