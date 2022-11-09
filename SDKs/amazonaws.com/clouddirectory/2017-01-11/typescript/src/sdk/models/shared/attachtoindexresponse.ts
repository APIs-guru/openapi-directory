import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AttachToIndexResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttachedObjectIdentifier" })
  attachedObjectIdentifier?: string;
}
