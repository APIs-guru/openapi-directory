import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPackageServiceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cmd" })
  cmd: string;
}


export class PostPackageServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostPackageServiceQueryParams;
}


export class PostPackageServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postPackageServiceDefaultTextXmlString?: string;
}
