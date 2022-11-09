import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Pipeline } from "./pipeline";


// ListPipelinesResponse
/** 
 * A list of the pipelines associated with the current AWS account.
**/
export class ListPipelinesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=Pipelines", elemType: shared.Pipeline })
  pipelines?: Pipeline[];
}
