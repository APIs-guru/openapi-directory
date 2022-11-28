import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRestartAppServerActionEnum {
    RestartAppServer = "RestartAppServer"
}
export declare enum GetRestartAppServerVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetRestartAppServerQueryParams extends SpeakeasyBase {
    action: GetRestartAppServerActionEnum;
    environmentId?: string;
    environmentName?: string;
    version: GetRestartAppServerVersionEnum;
}
export declare class GetRestartAppServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRestartAppServerRequest extends SpeakeasyBase {
    queryParams: GetRestartAppServerQueryParams;
    headers: GetRestartAppServerHeaders;
}
export declare class GetRestartAppServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
