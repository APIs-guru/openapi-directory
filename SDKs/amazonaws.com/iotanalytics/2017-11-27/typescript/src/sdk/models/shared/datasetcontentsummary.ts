import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetContentStatus } from "./datasetcontentstatus";


// DatasetContentSummary
/** 
 * Summary information about dataset contents.
**/
export class DatasetContentSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionTime" })
  completionTime?: Date;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=scheduleTime" })
  scheduleTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: DatasetContentStatus;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
