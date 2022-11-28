import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateStudioOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StudioId" })
  studioId?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}
