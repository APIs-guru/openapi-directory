import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPackagePathParams extends SpeakeasyBase {
    group: string;
    name: string;
    version: string;
}
export declare class GetPackageRequest extends SpeakeasyBase {
    pathParams: GetPackagePathParams;
}
export declare class GetPackageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPackageDefaultApplicationOctetStreamBinaryString?: Uint8Array;
}
