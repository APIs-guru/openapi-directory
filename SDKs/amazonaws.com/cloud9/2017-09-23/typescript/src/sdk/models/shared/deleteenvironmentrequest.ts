import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId: string;
}
