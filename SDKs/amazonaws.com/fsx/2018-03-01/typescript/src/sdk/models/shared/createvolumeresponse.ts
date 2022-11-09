import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Volume } from "./volume";


export class CreateVolumeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Volume" })
  volume?: Volume;
}
