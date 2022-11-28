import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UntagProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags: string[];
}
