import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageRecipeSummary } from "./imagerecipesummary";



export class ListImageRecipesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageRecipeSummaryList", elemType: ImageRecipeSummary })
  imageRecipeSummaryList?: ImageRecipeSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
