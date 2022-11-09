import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Connection } from "./connection";


// DescribeConnectionsResponse
/** 
 * <p/>
**/
export class DescribeConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Connections", elemType: shared.Connection })
  connections?: Connection[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
