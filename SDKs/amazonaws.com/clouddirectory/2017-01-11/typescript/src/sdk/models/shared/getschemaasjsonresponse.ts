import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSchemaAsJsonResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Document" })
  document?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
