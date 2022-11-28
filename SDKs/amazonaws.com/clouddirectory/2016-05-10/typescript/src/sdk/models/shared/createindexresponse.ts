import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;
}
