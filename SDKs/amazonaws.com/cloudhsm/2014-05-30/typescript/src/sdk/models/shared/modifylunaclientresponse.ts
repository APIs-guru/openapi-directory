import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModifyLunaClientResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientArn" })
  clientArn?: string;
}
