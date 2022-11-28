import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";



export class UpdateVolumeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Volume" })
  volume?: Volume;
}
