import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNamedQueryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NamedQueryId" })
  namedQueryId: string;
}
