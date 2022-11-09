import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AttachObjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttachedObjectIdentifier" })
  attachedObjectIdentifier?: string;
}
