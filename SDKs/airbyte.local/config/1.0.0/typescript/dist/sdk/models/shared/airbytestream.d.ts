import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SyncModeEnum } from "./syncmodeenum";
/**
 * the immutable schema defined by the source
**/
export declare class AirbyteStream extends SpeakeasyBase {
    defaultCursorField?: string[];
    jsonSchema?: Map<string, any>;
    name: string;
    namespace?: string;
    sourceDefinedCursor?: boolean;
    sourceDefinedPrimaryKey?: string[][];
    supportedSyncModes?: SyncModeEnum[];
}
