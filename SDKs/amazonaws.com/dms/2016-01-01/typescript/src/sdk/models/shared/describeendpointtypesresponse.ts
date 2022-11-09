import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SupportedEndpointType } from "./supportedendpointtype";


// DescribeEndpointTypesResponse
/** 
 * <p/>
**/
export class DescribeEndpointTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=SupportedEndpointTypes", elemType: shared.SupportedEndpointType })
  supportedEndpointTypes?: SupportedEndpointType[];
}
