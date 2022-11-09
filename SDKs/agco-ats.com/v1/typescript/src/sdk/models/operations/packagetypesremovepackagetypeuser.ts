import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PackageTypesRemovePackageTypeUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userID" })
  userId: number;
}


export class PackageTypesRemovePackageTypeUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PackageTypesRemovePackageTypeUserPathParams;
}


export class PackageTypesRemovePackageTypeUserResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
