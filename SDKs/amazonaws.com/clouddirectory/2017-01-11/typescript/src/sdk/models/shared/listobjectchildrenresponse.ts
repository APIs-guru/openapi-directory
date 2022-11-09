import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListObjectChildrenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Children" })
  children?: Map<string, string>;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
