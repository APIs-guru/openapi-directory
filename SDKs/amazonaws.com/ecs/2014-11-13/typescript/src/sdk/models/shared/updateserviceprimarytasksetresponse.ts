import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskSet } from "./taskset";



export class UpdateServicePrimaryTaskSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskSet" })
  taskSet?: TaskSet;
}
