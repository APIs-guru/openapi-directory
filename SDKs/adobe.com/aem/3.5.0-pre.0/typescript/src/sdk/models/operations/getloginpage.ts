import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLoginPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLoginPageDefaultTextHtmlString?: string;
}
