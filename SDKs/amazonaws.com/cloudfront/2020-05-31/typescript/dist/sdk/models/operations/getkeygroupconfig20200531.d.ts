import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetKeyGroupConfig20200531PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetKeyGroupConfig20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetKeyGroupConfig20200531Request extends SpeakeasyBase {
    pathParams: GetKeyGroupConfig20200531PathParams;
    headers: GetKeyGroupConfig20200531Headers;
}
export declare class GetKeyGroupConfig20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
