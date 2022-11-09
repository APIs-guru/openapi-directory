import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationSyncModeEnum } from "./destinationsyncmodeenum";
import { SyncModeEnum } from "./syncmodeenum";


// AirbyteStreamConfiguration
/** 
 * the mutable part of the stream to configure the destination
**/
export class AirbyteStreamConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=aliasName" })
  aliasName?: string;

  @Metadata({ data: "json, name=cursorField" })
  cursorField?: string[];

  @Metadata({ data: "json, name=destinationSyncMode" })
  destinationSyncMode: DestinationSyncModeEnum;

  @Metadata({ data: "json, name=primaryKey" })
  primaryKey?: string[][];

  @Metadata({ data: "json, name=selected" })
  selected?: boolean;

  @Metadata({ data: "json, name=syncMode" })
  syncMode: SyncModeEnum;
}
