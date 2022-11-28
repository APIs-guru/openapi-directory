import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DetachFromIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DetachedObjectIdentifier" })
  detachedObjectIdentifier?: string;
}
