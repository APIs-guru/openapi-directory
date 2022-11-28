import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatastoreSummary } from "./datastoresummary";



export class ListDatastoresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datastoreSummaries", elemType: DatastoreSummary })
  datastoreSummaries?: DatastoreSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
