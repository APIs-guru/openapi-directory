import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateGraphResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GraphArn" })
  graphArn?: string;
}
