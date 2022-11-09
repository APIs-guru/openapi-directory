import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPackageServiceJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PostPackageServiceJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=_charset_" })
  charset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cmd" })
  cmd: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupName" })
  groupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=packageName" })
  packageName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=packageVersion" })
  packageVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=recursive" })
  recursive?: boolean;
}


export class PostPackageServiceJsonRequestBodyPackage extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=package" })
  package: string;
}


export class PostPackageServiceJsonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  package?: PostPackageServiceJsonRequestBodyPackage;
}


export class PostPackageServiceJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostPackageServiceJsonPathParams;

  @Metadata()
  queryParams: PostPackageServiceJsonQueryParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostPackageServiceJsonRequestBody;
}


export class PostPackageServiceJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postPackageServiceJsonDefaultApplicationJsonString?: string;
}
