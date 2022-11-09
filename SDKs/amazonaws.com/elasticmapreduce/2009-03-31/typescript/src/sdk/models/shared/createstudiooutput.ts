import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateStudioOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=StudioId" })
  studioId?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}
