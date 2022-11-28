import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SupportedEndpointType } from "./supportedendpointtype";



// DescribeEndpointTypesResponse
/** 
 * <p/>
**/
export class DescribeEndpointTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=SupportedEndpointTypes", elemType: SupportedEndpointType })
  supportedEndpointTypes?: SupportedEndpointType[];
}
