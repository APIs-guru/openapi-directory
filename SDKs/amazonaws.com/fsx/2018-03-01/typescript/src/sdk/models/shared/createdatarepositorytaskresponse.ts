import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataRepositoryTask } from "./datarepositorytask";


export class CreateDataRepositoryTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataRepositoryTask" })
  dataRepositoryTask?: DataRepositoryTask;
}
