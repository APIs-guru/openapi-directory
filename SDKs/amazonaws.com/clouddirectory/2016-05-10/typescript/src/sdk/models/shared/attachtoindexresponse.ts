import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AttachToIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttachedObjectIdentifier" })
  attachedObjectIdentifier?: string;
}
