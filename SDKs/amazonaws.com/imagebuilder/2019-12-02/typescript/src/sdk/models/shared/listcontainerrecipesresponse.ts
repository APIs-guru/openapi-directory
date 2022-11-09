import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContainerRecipeSummary } from "./containerrecipesummary";


export class ListContainerRecipesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerRecipeSummaryList", elemType: shared.ContainerRecipeSummary })
  containerRecipeSummaryList?: ContainerRecipeSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
