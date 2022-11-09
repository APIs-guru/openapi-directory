import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLunaClientResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status: string;
}
