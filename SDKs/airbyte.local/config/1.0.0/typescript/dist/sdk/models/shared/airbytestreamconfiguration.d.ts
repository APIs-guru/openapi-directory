import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationSyncModeEnum } from "./destinationsyncmodeenum";
import { SyncModeEnum } from "./syncmodeenum";
/**
 * the mutable part of the stream to configure the destination
**/
export declare class AirbyteStreamConfiguration extends SpeakeasyBase {
    aliasName?: string;
    cursorField?: string[];
    destinationSyncMode: DestinationSyncModeEnum;
    primaryKey?: string[][];
    selected?: boolean;
    syncMode: SyncModeEnum;
}
