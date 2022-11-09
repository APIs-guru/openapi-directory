import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListOfferingPromotionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
