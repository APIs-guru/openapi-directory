import { SpeakeasyBase } from "../../../internal/utils";
export declare class PackageTypesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PackageTypesDeleteRequest extends SpeakeasyBase {
    pathParams: PackageTypesDeletePathParams;
}
export declare class PackageTypesDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
