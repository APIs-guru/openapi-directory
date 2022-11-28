import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudioSummary } from "./studiosummary";



export class ListStudiosOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=Studios", elemType: StudioSummary })
  studios?: StudioSummary[];
}
