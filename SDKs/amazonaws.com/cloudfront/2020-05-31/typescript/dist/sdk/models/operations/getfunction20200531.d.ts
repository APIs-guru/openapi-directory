import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetFunction20200531PathParams extends SpeakeasyBase {
    name: string;
}
export declare enum GetFunction20200531StageEnum {
    Development = "DEVELOPMENT",
    Live = "LIVE"
}
export declare class GetFunction20200531QueryParams extends SpeakeasyBase {
    stage?: GetFunction20200531StageEnum;
}
export declare class GetFunction20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFunction20200531Request extends SpeakeasyBase {
    pathParams: GetFunction20200531PathParams;
    queryParams: GetFunction20200531QueryParams;
    headers: GetFunction20200531Headers;
}
export declare class GetFunction20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
