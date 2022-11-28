import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListOfferingPromotionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
