import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListPolicyAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectIdentifiers" })
  objectIdentifiers?: string[];
}
