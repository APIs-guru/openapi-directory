import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateMacSecKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cak" })
  cak?: string;

  @Metadata({ data: "json, name=ckn" })
  ckn?: string;

  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;

  @Metadata({ data: "json, name=secretARN" })
  secretArn?: string;
}
