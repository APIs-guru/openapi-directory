import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNamedQueryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=Database" })
  database: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=QueryString" })
  queryString: string;

  @Metadata({ data: "json, name=WorkGroup" })
  workGroup?: string;
}
