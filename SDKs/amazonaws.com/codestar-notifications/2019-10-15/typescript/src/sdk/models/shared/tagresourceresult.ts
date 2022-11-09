import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagResourceResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
