import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatastoreSummary } from "./datastoresummary";


export class ListDatastoresResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datastoreSummaries", elemType: shared.DatastoreSummary })
  datastoreSummaries?: DatastoreSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
