import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StatusCodes
/** 
 * Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">Status Code Definitions</a>.
**/
export class StatusCodes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status2xx?: number;

  @SpeakeasyMetadata()
  status3xx?: number;

  @SpeakeasyMetadata()
  status4xx?: number;

  @SpeakeasyMetadata()
  status5xx?: number;
}
