import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeOrderableReplicationInstancesMessage
/** 
 * <p/>
**/
export class DescribeOrderableReplicationInstancesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxRecords" })
  maxRecords?: number;
}
