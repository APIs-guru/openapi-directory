import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteInterconnectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interconnectId" })
  interconnectId: string;
}
