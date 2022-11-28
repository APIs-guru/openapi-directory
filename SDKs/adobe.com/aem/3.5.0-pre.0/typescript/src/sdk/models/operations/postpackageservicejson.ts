import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPackageServiceJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PostPackageServiceJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=_charset_" })
  charset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cmd" })
  cmd: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupName" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=packageVersion" })
  packageVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recursive" })
  recursive?: boolean;
}


export class PostPackageServiceJsonRequestBodyPackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=package" })
  package: string;
}


export class PostPackageServiceJsonRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  package?: PostPackageServiceJsonRequestBodyPackage;
}


export class PostPackageServiceJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPackageServiceJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: PostPackageServiceJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostPackageServiceJsonRequestBody;
}


export class PostPackageServiceJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postPackageServiceJsonDefaultApplicationJsonString?: string;
}
