import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateObjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;
}
