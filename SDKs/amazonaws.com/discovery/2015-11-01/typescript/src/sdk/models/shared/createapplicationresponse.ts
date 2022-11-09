import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateApplicationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationId" })
  configurationId?: string;
}
