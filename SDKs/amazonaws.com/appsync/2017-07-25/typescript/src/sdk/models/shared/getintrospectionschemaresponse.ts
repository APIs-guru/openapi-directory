import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetIntrospectionSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;
}
