import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Endpoint
/** 
 * Represents the information required for client programs to connect to the endpoint for a DAX cluster.
**/
export class Endpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=URL" })
  url?: string;
}
