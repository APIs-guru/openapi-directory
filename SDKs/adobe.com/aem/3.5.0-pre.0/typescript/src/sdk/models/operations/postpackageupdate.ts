import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPackageUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=_charset_" })
  charset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupName" })
  groupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=packageName" })
  packageName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version: string;
}


export class PostPackageUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostPackageUpdateQueryParams;
}


export class PostPackageUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postPackageUpdateDefaultApplicationJsonString?: string;
}
