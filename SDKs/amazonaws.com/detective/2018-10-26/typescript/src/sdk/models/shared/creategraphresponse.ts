import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateGraphResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=GraphArn" })
  graphArn?: string;
}
