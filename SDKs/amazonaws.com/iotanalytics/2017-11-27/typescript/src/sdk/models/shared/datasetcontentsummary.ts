import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetContentStatus } from "./datasetcontentstatus";



// DatasetContentSummary
/** 
 * Summary information about dataset contents.
**/
export class DatasetContentSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completionTime" })
  completionTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=scheduleTime" })
  scheduleTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DatasetContentStatus;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
