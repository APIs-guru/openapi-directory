import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalSecondaryIndexInfo } from "./globalsecondaryindexinfo";
import { LocalSecondaryIndexInfo } from "./localsecondaryindexinfo";
import { SseDescription } from "./ssedescription";
import { StreamSpecification } from "./streamspecification";
import { TimeToLiveDescription } from "./timetolivedescription";



// SourceTableFeatureDetails
/** 
 * Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL. 
**/
export class SourceTableFeatureDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlobalSecondaryIndexes", elemType: GlobalSecondaryIndexInfo })
  globalSecondaryIndexes?: GlobalSecondaryIndexInfo[];

  @SpeakeasyMetadata({ data: "json, name=LocalSecondaryIndexes", elemType: LocalSecondaryIndexInfo })
  localSecondaryIndexes?: LocalSecondaryIndexInfo[];

  @SpeakeasyMetadata({ data: "json, name=SSEDescription" })
  sseDescription?: SseDescription;

  @SpeakeasyMetadata({ data: "json, name=StreamDescription" })
  streamDescription?: StreamSpecification;

  @SpeakeasyMetadata({ data: "json, name=TimeToLiveDescription" })
  timeToLiveDescription?: TimeToLiveDescription;
}
