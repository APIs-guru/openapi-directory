import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceEndpoint
/** 
 * The endpoint to which service requests can be submitted.
**/
export class ServiceEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  endpoint?: string;
}
