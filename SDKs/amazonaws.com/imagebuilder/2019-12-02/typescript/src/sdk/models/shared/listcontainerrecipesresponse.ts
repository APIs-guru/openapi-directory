import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerRecipeSummary } from "./containerrecipesummary";



export class ListContainerRecipesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerRecipeSummaryList", elemType: ContainerRecipeSummary })
  containerRecipeSummaryList?: ContainerRecipeSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
