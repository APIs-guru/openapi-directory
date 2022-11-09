import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NamedQuery } from "./namedquery";
import { UnprocessedNamedQueryId } from "./unprocessednamedqueryid";


export class BatchGetNamedQueryOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NamedQueries", elemType: shared.NamedQuery })
  namedQueries?: NamedQuery[];

  @Metadata({ data: "json, name=UnprocessedNamedQueryIds", elemType: shared.UnprocessedNamedQueryId })
  unprocessedNamedQueryIds?: UnprocessedNamedQueryId[];
}
