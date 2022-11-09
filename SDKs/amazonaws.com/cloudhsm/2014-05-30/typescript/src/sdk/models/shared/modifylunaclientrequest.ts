import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModifyLunaClientRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Certificate" })
  certificate: string;

  @Metadata({ data: "json, name=ClientArn" })
  clientArn: string;
}
