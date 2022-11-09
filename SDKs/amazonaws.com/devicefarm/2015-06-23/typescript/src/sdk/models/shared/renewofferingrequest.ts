import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RenewOfferingRequest
/** 
 * A request that represents an offering renewal.
**/
export class RenewOfferingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=offeringId" })
  offeringId: string;

  @Metadata({ data: "json, name=quantity" })
  quantity: number;
}
