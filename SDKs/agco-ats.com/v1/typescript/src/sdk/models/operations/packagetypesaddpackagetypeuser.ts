import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PackageTypesAddPackageTypeUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userID" })
  userId: number;
}


export class PackageTypesAddPackageTypeUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackageTypesAddPackageTypeUserPathParams;
}


export class PackageTypesAddPackageTypeUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
