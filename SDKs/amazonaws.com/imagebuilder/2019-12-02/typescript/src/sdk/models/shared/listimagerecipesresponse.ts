import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageRecipeSummary } from "./imagerecipesummary";


export class ListImageRecipesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageRecipeSummaryList", elemType: shared.ImageRecipeSummary })
  imageRecipeSummaryList?: ImageRecipeSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
