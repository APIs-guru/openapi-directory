import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeOrderableReplicationInstancesMessage
/** 
 * <p/>
**/
export class DescribeOrderableReplicationInstancesMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=MaxRecords" })
  maxRecords?: number;
}
