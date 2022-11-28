import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Pipeline } from "./pipeline";



// ListPipelinesResponse
/** 
 * A list of the pipelines associated with the current AWS account.
**/
export class ListPipelinesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Pipelines", elemType: Pipeline })
  pipelines?: Pipeline[];
}
