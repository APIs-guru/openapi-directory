import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPackageUpdateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=_charset_" })
  charset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupName" })
  groupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=packageName" })
  packageName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=path" })
  path: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version: string;
}


export class PostPackageUpdateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostPackageUpdateQueryParams;
}


export class PostPackageUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postPackageUpdateDefaultApplicationJsonString?: string;
}
