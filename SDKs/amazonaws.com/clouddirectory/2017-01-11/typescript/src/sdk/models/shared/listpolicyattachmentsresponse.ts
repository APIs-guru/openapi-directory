import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListPolicyAttachmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ObjectIdentifiers" })
  objectIdentifiers?: string[];
}
