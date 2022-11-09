import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PackageTypesAddPackageTypeUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userID" })
  userId: number;
}


export class PackageTypesAddPackageTypeUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PackageTypesAddPackageTypeUserPathParams;
}


export class PackageTypesAddPackageTypeUserResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
