import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPackageManagerServletResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPackageManagerServlet404TextHtmlString?: string;

  @SpeakeasyMetadata()
  getPackageManagerServlet405TextHtmlString?: string;
}
