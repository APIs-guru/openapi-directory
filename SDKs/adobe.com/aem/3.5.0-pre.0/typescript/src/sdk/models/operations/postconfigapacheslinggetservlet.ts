import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostConfigApacheSlingGetServletQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=enable.html" })
  enableHtml?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enable.html@TypeHint" })
  enableHtmlAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enable.txt" })
  enableTxt?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enable.txt@TypeHint" })
  enableTxtAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enable.xml" })
  enableXml?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enable.xml@TypeHint" })
  enableXmlAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=json.maximumresults" })
  jsonMaximumresults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=json.maximumresults@TypeHint" })
  jsonMaximumresultsAtTypeHint?: string;
}


export class PostConfigApacheSlingGetServletRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostConfigApacheSlingGetServletQueryParams;
}


export class PostConfigApacheSlingGetServletResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
