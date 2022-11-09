import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchGetNamedQueryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NamedQueryIds" })
  namedQueryIds: string[];
}
