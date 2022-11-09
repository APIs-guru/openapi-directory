import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListStudiosInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
