import { SpeakeasyBase } from "../../../internal/utils";
export declare class PackageTypesAddPackageTypeUserPathParams extends SpeakeasyBase {
    id: string;
    userId: number;
}
export declare class PackageTypesAddPackageTypeUserRequest extends SpeakeasyBase {
    pathParams: PackageTypesAddPackageTypeUserPathParams;
}
export declare class PackageTypesAddPackageTypeUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
