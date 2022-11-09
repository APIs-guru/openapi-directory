import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteResourceTreeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
