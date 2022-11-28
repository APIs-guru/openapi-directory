import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifyLunaClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientArn" })
  clientArn?: string;
}
