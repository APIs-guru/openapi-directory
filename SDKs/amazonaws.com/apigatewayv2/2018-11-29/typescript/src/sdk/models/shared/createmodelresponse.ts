import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateModelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentType" })
  contentType?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ModelId" })
  modelId?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Schema" })
  schema?: string;
}
