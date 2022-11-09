import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OfferingPromotion } from "./offeringpromotion";


export class ListOfferingPromotionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=offeringPromotions", elemType: shared.OfferingPromotion })
  offeringPromotions?: OfferingPromotion[];
}
