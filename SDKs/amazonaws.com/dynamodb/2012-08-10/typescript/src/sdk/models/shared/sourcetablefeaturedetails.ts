import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=GlobalSecondaryIndexes", elemType: shared.GlobalSecondaryIndexInfo })
  globalSecondaryIndexes?: GlobalSecondaryIndexInfo[];

  @Metadata({ data: "json, name=LocalSecondaryIndexes", elemType: shared.LocalSecondaryIndexInfo })
  localSecondaryIndexes?: LocalSecondaryIndexInfo[];

  @Metadata({ data: "json, name=SSEDescription" })
  sseDescription?: SseDescription;

  @Metadata({ data: "json, name=StreamDescription" })
  streamDescription?: StreamSpecification;

  @Metadata({ data: "json, name=TimeToLiveDescription" })
  timeToLiveDescription?: TimeToLiveDescription;
}
