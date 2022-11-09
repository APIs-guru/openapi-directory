import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataflowEndpoint } from "./dataflowendpoint";
import { SecurityDetails } from "./securitydetails";


// EndpointDetails
/** 
 * Information about the endpoint details.
**/
export class EndpointDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpoint" })
  endpoint?: DataflowEndpoint;

  @Metadata({ data: "json, name=securityDetails" })
  securityDetails?: SecurityDetails;
}
