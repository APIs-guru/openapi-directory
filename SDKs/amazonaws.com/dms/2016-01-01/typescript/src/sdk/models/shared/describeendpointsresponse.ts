import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";



// DescribeEndpointsResponse
/** 
 * <p/>
**/
export class DescribeEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Endpoints", elemType: Endpoint })
  endpoints?: Endpoint[];

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
