import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";



// DescribeReplicationTasksMessage
/** 
 * <p/>
**/
export class DescribeReplicationTasksMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: Filter })
  filters?: Filter[];

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "json, name=WithoutSettings" })
  withoutSettings?: boolean;
}
