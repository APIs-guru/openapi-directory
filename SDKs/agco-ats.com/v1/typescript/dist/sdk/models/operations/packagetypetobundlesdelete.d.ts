import { SpeakeasyBase } from "../../../internal/utils";
export declare class PackageTypetoBundlesDeleteQueryParams extends SpeakeasyBase {
    bundleId: string;
    packageTypeId: string;
}
export declare class PackageTypetoBundlesDeleteRequest extends SpeakeasyBase {
    queryParams: PackageTypetoBundlesDeleteQueryParams;
}
export declare class PackageTypetoBundlesDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
