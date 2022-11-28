import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteStudioInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StudioId" })
  studioId: string;
}
