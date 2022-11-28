import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OfferingPromotion } from "./offeringpromotion";



export class ListOfferingPromotionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=offeringPromotions", elemType: OfferingPromotion })
  offeringPromotions?: OfferingPromotion[];
}
