import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DetachObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DetachedObjectIdentifier" })
  detachedObjectIdentifier?: string;
}
