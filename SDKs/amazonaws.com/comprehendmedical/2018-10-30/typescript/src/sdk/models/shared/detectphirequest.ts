import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DetectPhiRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Text" })
  text: string;
}
