import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAssociatedStacksResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Names" })
  names?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
