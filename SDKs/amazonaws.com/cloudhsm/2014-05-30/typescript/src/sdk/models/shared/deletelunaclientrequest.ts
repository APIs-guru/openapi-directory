import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLunaClientRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientArn" })
  clientArn: string;
}
