import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateObjectAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;
}
