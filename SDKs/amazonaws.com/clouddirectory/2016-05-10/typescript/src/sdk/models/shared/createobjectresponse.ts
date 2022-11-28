import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;
}
