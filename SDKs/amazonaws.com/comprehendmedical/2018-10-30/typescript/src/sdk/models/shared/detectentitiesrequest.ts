import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DetectEntitiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Text" })
  text: string;
}
