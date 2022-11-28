import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPackageServiceJsonPathParams extends SpeakeasyBase {
    path: string;
}
export declare class PostPackageServiceJsonQueryParams extends SpeakeasyBase {
    charset?: string;
    cmd: string;
    force?: boolean;
    groupName?: string;
    packageName?: string;
    packageVersion?: string;
    recursive?: boolean;
}
export declare class PostPackageServiceJsonRequestBodyPackage extends SpeakeasyBase {
    content: Uint8Array;
    package: string;
}
export declare class PostPackageServiceJsonRequestBody extends SpeakeasyBase {
    package?: PostPackageServiceJsonRequestBodyPackage;
}
export declare class PostPackageServiceJsonRequest extends SpeakeasyBase {
    pathParams: PostPackageServiceJsonPathParams;
    queryParams: PostPackageServiceJsonQueryParams;
    request?: PostPackageServiceJsonRequestBody;
}
export declare class PostPackageServiceJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postPackageServiceJsonDefaultApplicationJsonString?: string;
}
