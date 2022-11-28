import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PackageTypesRemovePackageTypeUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userID" })
  userId: number;
}


export class PackageTypesRemovePackageTypeUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackageTypesRemovePackageTypeUserPathParams;
}


export class PackageTypesRemovePackageTypeUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
