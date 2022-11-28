import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";



// DescribeConnectionsResponse
/** 
 * <p/>
**/
export class DescribeConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Connections", elemType: Connection })
  connections?: Connection[];

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
