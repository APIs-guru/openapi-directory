import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Endpoint } from "./endpoint";


// DescribeEndpointsResponse
/** 
 * <p/>
**/
export class DescribeEndpointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Endpoints", elemType: shared.Endpoint })
  endpoints?: Endpoint[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
