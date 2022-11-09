import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiMappingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiId" })
  apiId?: string;

  @Metadata({ data: "json, name=ApiMappingId" })
  apiMappingId?: string;

  @Metadata({ data: "json, name=ApiMappingKey" })
  apiMappingKey?: string;

  @Metadata({ data: "json, name=Stage" })
  stage?: string;
}
