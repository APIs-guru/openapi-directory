import { SpeakeasyBase } from "../../../internal/utils";
export declare class PackageTypesRemovePackageTypeUserPathParams extends SpeakeasyBase {
    id: string;
    userId: number;
}
export declare class PackageTypesRemovePackageTypeUserRequest extends SpeakeasyBase {
    pathParams: PackageTypesRemovePackageTypeUserPathParams;
}
export declare class PackageTypesRemovePackageTypeUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
