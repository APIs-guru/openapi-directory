import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiModelsApiError extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeveloperMessage" })
  developerMessage?: string;

  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: number;

  @Metadata({ data: "json, name=MoreInfo" })
  moreInfo?: string;

  @Metadata({ data: "json, name=UserMessage" })
  userMessage?: string;
}
