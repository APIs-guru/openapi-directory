import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DetachObjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DetachedObjectIdentifier" })
  detachedObjectIdentifier?: string;
}
