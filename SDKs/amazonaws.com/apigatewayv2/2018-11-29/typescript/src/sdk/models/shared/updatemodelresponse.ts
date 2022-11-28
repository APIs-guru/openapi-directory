import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelId" })
  modelId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Schema" })
  schema?: string;
}
