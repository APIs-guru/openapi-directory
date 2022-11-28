import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Endpoint
/** 
 * An endpoint information details.
**/
export class Endpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address" })
  address: string;

  @SpeakeasyMetadata({ data: "json, name=CachePeriodInMinutes" })
  cachePeriodInMinutes: number;
}
