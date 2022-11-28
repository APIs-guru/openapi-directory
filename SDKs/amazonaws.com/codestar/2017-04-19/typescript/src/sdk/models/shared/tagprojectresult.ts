import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagProjectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
