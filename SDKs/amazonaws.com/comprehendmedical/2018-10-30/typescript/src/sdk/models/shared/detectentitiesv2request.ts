import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DetectEntitiesV2Request extends SpeakeasyBase {
  @Metadata({ data: "json, name=Text" })
  text: string;
}
