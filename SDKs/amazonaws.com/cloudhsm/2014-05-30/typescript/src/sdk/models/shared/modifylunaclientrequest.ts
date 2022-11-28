import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifyLunaClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Certificate" })
  certificate: string;

  @SpeakeasyMetadata({ data: "json, name=ClientArn" })
  clientArn: string;
}
