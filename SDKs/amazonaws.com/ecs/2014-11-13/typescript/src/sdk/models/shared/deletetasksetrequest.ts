import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTaskSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster: string;

  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=service" })
  service: string;

  @Metadata({ data: "json, name=taskSet" })
  taskSet: string;
}
