import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetIntrospectionSchemaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=schema" })
  schema?: string;
}
