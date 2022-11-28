import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PackagesDeletePackagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class PackagesDeletePackageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackagesDeletePackagePathParams;
}


export class PackagesDeletePackageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
