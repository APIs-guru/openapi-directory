import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetEntry } from "./datasetentry";
import { DatasetContentStatus } from "./datasetcontentstatus";



export class GetDatasetContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: DatasetEntry })
  entries?: DatasetEntry[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DatasetContentStatus;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: Date;
}
