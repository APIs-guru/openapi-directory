import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLoginPageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLoginPageDefaultTextHtmlString?: string;
}
