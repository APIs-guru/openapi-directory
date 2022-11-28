import { SpeakeasyBase } from "../../../internal/utils";
export declare class PackagesDeletePackagePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PackagesDeletePackageRequest extends SpeakeasyBase {
    pathParams: PackagesDeletePackagePathParams;
}
export declare class PackagesDeletePackageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
