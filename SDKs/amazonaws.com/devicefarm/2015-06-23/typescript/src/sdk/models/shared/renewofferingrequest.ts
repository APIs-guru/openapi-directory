import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RenewOfferingRequest
/** 
 * A request that represents an offering renewal.
**/
export class RenewOfferingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offeringId" })
  offeringId: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;
}
