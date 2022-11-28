import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SyncModeEnum } from "./syncmodeenum";



// AirbyteStream
/** 
 * the immutable schema defined by the source
**/
export class AirbyteStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultCursorField" })
  defaultCursorField?: string[];

  @SpeakeasyMetadata({ data: "json, name=jsonSchema" })
  jsonSchema?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceDefinedCursor" })
  sourceDefinedCursor?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sourceDefinedPrimaryKey" })
  sourceDefinedPrimaryKey?: string[][];

  @SpeakeasyMetadata({ data: "json, name=supportedSyncModes" })
  supportedSyncModes?: SyncModeEnum[];
}
