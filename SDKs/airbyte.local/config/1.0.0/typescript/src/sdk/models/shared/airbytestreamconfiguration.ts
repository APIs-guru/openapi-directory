import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationSyncModeEnum } from "./destinationsyncmodeenum";
import { SyncModeEnum } from "./syncmodeenum";



// AirbyteStreamConfiguration
/** 
 * the mutable part of the stream to configure the destination
**/
export class AirbyteStreamConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aliasName" })
  aliasName?: string;

  @SpeakeasyMetadata({ data: "json, name=cursorField" })
  cursorField?: string[];

  @SpeakeasyMetadata({ data: "json, name=destinationSyncMode" })
  destinationSyncMode: DestinationSyncModeEnum;

  @SpeakeasyMetadata({ data: "json, name=primaryKey" })
  primaryKey?: string[][];

  @SpeakeasyMetadata({ data: "json, name=selected" })
  selected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=syncMode" })
  syncMode: SyncModeEnum;
}
