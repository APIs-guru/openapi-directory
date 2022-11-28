import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLunaClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientArn" })
  clientArn: string;
}
