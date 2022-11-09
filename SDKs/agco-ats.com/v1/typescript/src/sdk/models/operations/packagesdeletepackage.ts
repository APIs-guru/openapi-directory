import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PackagesDeletePackagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class PackagesDeletePackageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PackagesDeletePackagePathParams;
}


export class PackagesDeletePackageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
