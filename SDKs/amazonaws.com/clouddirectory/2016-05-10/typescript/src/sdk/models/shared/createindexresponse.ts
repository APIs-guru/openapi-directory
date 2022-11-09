import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateIndexResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;
}
