import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PackageTypesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class PackageTypesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PackageTypesDeletePathParams;
}


export class PackageTypesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
