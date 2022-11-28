import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListNamedQueriesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NamedQueryIds" })
  namedQueryIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
