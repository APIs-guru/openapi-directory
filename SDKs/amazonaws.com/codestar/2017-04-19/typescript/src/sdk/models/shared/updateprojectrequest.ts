import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
