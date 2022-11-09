import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateObjectAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;
}
