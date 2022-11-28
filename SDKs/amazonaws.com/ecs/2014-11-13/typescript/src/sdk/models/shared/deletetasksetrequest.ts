import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTaskSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster: string;

  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service: string;

  @SpeakeasyMetadata({ data: "json, name=taskSet" })
  taskSet: string;
}
