import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AttachObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttachedObjectIdentifier" })
  attachedObjectIdentifier?: string;
}
