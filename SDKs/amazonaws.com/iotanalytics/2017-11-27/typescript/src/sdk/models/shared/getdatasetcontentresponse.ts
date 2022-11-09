import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetEntry } from "./datasetentry";
import { DatasetContentStatus } from "./datasetcontentstatus";


export class GetDatasetContentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.DatasetEntry })
  entries?: DatasetEntry[];

  @Metadata({ data: "json, name=status" })
  status?: DatasetContentStatus;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;
}
