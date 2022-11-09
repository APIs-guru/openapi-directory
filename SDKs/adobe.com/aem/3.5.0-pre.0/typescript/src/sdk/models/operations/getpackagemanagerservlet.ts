import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPackageManagerServletResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPackageManagerServlet404TextHtmlString?: string;

  @Metadata()
  getPackageManagerServlet405TextHtmlString?: string;
}
