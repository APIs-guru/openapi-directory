import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Scale } from "./scale";



export class UpdateTaskSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster: string;

  @SpeakeasyMetadata({ data: "json, name=scale" })
  scale: Scale;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service: string;

  @SpeakeasyMetadata({ data: "json, name=taskSet" })
  taskSet: string;
}
