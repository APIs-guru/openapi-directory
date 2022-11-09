import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteClassifierRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
