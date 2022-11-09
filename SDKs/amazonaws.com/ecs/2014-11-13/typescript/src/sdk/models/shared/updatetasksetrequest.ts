import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Scale } from "./scale";


export class UpdateTaskSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster: string;

  @Metadata({ data: "json, name=scale" })
  scale: Scale;

  @Metadata({ data: "json, name=service" })
  service: string;

  @Metadata({ data: "json, name=taskSet" })
  taskSet: string;
}
