import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListObjectParentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Parents" })
  parents?: Map<string, string>;
}
