import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteInterconnectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=interconnectId" })
  interconnectId: string;
}
