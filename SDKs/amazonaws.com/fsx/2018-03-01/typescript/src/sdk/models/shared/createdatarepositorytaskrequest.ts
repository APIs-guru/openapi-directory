import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompletionReport } from "./completionreport";
import { Tag } from "./tag";
import { DataRepositoryTaskTypeEnum } from "./datarepositorytasktypeenum";



export class CreateDataRepositoryTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @SpeakeasyMetadata({ data: "json, name=Paths" })
  paths?: string[];

  @SpeakeasyMetadata({ data: "json, name=Report" })
  report: CompletionReport;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: DataRepositoryTaskTypeEnum;
}
