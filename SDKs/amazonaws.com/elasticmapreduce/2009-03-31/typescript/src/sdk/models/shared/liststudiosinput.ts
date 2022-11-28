import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListStudiosInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
