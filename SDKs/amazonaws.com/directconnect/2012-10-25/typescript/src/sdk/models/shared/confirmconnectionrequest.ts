import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfirmConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;
}
