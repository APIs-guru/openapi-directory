import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataflowEndpoint } from "./dataflowendpoint";
import { SecurityDetails } from "./securitydetails";



// EndpointDetails
/** 
 * Information about the endpoint details.
**/
export class EndpointDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: DataflowEndpoint;

  @SpeakeasyMetadata({ data: "json, name=securityDetails" })
  securityDetails?: SecurityDetails;
}
