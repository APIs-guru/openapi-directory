import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateApiMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiId" })
  apiId?: string;

  @SpeakeasyMetadata({ data: "json, name=ApiMappingId" })
  apiMappingId?: string;

  @SpeakeasyMetadata({ data: "json, name=ApiMappingKey" })
  apiMappingKey?: string;

  @SpeakeasyMetadata({ data: "json, name=Stage" })
  stage?: string;
}
