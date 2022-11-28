import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerRecipeSummary } from "./containerrecipesummary";
export declare class ListContainerRecipesResponse extends SpeakeasyBase {
    containerRecipeSummaryList?: ContainerRecipeSummary[];
    nextToken?: string;
    requestId?: string;
}
