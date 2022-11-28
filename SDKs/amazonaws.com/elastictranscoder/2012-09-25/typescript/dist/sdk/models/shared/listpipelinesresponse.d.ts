import { SpeakeasyBase } from "../../../internal/utils";
import { Pipeline } from "./pipeline";
/**
 * A list of the pipelines associated with the current AWS account.
**/
export declare class ListPipelinesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    pipelines?: Pipeline[];
}
