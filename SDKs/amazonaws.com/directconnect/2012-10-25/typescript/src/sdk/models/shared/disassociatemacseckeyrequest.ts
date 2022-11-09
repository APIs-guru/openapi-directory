import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateMacSecKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;

  @Metadata({ data: "json, name=secretARN" })
  secretArn: string;
}
