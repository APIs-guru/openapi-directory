import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPackageFilterPathParams extends SpeakeasyBase {
    group: string;
    name: string;
    version: string;
}
export declare class GetPackageFilterRequest extends SpeakeasyBase {
    pathParams: GetPackageFilterPathParams;
}
export declare class GetPackageFilterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPackageFilterDefaultApplicationJsonString?: string;
}
