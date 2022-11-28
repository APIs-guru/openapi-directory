import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamedQuery } from "./namedquery";
import { UnprocessedNamedQueryId } from "./unprocessednamedqueryid";



export class BatchGetNamedQueryOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NamedQueries", elemType: NamedQuery })
  namedQueries?: NamedQuery[];

  @SpeakeasyMetadata({ data: "json, name=UnprocessedNamedQueryIds", elemType: UnprocessedNamedQueryId })
  unprocessedNamedQueryIds?: UnprocessedNamedQueryId[];
}
