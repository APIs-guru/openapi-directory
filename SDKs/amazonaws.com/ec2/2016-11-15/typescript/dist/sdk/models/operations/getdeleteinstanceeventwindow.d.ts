import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteInstanceEventWindowActionEnum {
    DeleteInstanceEventWindow = "DeleteInstanceEventWindow"
}
export declare enum GetDeleteInstanceEventWindowVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteInstanceEventWindowQueryParams extends SpeakeasyBase {
    action: GetDeleteInstanceEventWindowActionEnum;
    dryRun?: boolean;
    forceDelete?: boolean;
    instanceEventWindowId: string;
    version: GetDeleteInstanceEventWindowVersionEnum;
}
export declare class GetDeleteInstanceEventWindowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteInstanceEventWindowRequest extends SpeakeasyBase {
    queryParams: GetDeleteInstanceEventWindowQueryParams;
    headers: GetDeleteInstanceEventWindowHeaders;
}
export declare class GetDeleteInstanceEventWindowResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
