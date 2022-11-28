import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataRepositoryTask } from "./datarepositorytask";



export class CreateDataRepositoryTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataRepositoryTask" })
  dataRepositoryTask?: DataRepositoryTask;
}
