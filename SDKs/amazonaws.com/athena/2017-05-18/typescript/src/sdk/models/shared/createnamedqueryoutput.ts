import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNamedQueryOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NamedQueryId" })
  namedQueryId?: string;
}
