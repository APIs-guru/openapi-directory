import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteListenerActionEnum {
    DeleteListener = "DeleteListener"
}
export declare enum GetDeleteListenerVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GetDeleteListenerQueryParams extends SpeakeasyBase {
    action: GetDeleteListenerActionEnum;
    listenerArn: string;
    version: GetDeleteListenerVersionEnum;
}
export declare class GetDeleteListenerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteListenerRequest extends SpeakeasyBase {
    queryParams: GetDeleteListenerQueryParams;
    headers: GetDeleteListenerHeaders;
}
export declare class GetDeleteListenerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
