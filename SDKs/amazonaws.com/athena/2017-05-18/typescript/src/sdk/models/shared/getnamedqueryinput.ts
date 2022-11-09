import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNamedQueryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NamedQueryId" })
  namedQueryId: string;
}
