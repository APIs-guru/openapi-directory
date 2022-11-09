import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListNamedQueriesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NamedQueryIds" })
  namedQueryIds?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
