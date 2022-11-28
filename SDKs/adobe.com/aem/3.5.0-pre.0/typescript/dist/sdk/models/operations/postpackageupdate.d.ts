import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPackageUpdateQueryParams extends SpeakeasyBase {
    charset?: string;
    filter?: string;
    groupName: string;
    packageName: string;
    path: string;
    version: string;
}
export declare class PostPackageUpdateRequest extends SpeakeasyBase {
    queryParams: PostPackageUpdateQueryParams;
}
export declare class PostPackageUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postPackageUpdateDefaultApplicationJsonString?: string;
}
