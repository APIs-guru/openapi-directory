import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteEnvironmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentId" })
  environmentId: string;
}
