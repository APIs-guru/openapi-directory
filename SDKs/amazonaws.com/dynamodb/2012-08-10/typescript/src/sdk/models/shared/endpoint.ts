import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Endpoint
/** 
 * An endpoint information details.
**/
export class Endpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address" })
  address: string;

  @Metadata({ data: "json, name=CachePeriodInMinutes" })
  cachePeriodInMinutes: number;
}
