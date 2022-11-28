import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostConfigApacheSlingGetServletQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enable.html" })
  enableHtml?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enable.html@TypeHint" })
  enableHtmlAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enable.txt" })
  enableTxt?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enable.txt@TypeHint" })
  enableTxtAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enable.xml" })
  enableXml?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enable.xml@TypeHint" })
  enableXmlAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=json.maximumresults" })
  jsonMaximumresults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=json.maximumresults@TypeHint" })
  jsonMaximumresultsAtTypeHint?: string;
}


export class PostConfigApacheSlingGetServletRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostConfigApacheSlingGetServletQueryParams;
}


export class PostConfigApacheSlingGetServletResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
