import { SpeakeasyBase } from "../../../internal/utils";
import { GlobalSecondaryIndexInfo } from "./globalsecondaryindexinfo";
import { LocalSecondaryIndexInfo } from "./localsecondaryindexinfo";
import { SseDescription } from "./ssedescription";
import { StreamSpecification } from "./streamspecification";
import { TimeToLiveDescription } from "./timetolivedescription";
/**
 * Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL.
**/
export declare class SourceTableFeatureDetails extends SpeakeasyBase {
    globalSecondaryIndexes?: GlobalSecondaryIndexInfo[];
    localSecondaryIndexes?: LocalSecondaryIndexInfo[];
    sseDescription?: SseDescription;
    streamDescription?: StreamSpecification;
    timeToLiveDescription?: TimeToLiveDescription;
}
