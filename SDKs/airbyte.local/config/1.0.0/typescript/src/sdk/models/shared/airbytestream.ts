import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SyncModeEnum } from "./syncmodeenum";


// AirbyteStream
/** 
 * the immutable schema defined by the source
**/
export class AirbyteStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultCursorField" })
  defaultCursorField?: string[];

  @Metadata({ data: "json, name=jsonSchema" })
  jsonSchema?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=namespace" })
  namespace?: string;

  @Metadata({ data: "json, name=sourceDefinedCursor" })
  sourceDefinedCursor?: boolean;

  @Metadata({ data: "json, name=sourceDefinedPrimaryKey" })
  sourceDefinedPrimaryKey?: string[][];

  @Metadata({ data: "json, name=supportedSyncModes" })
  supportedSyncModes?: SyncModeEnum[];
}
