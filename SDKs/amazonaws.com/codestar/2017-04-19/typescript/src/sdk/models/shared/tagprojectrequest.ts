import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags: Map<string, string>;
}
