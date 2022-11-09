import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteStudioInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=StudioId" })
  studioId: string;
}
