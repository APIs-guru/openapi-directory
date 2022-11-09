import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationId" })
  configurationId: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
