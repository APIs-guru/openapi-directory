import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPackageServiceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cmd" })
  cmd: string;
}


export class PostPackageServiceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostPackageServiceQueryParams;
}


export class PostPackageServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postPackageServiceDefaultTextXmlString?: string;
}
