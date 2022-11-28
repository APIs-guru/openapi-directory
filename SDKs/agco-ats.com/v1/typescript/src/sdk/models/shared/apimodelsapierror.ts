import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiModelsApiError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeveloperMessage" })
  developerMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=MoreInfo" })
  moreInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=UserMessage" })
  userMessage?: string;
}
