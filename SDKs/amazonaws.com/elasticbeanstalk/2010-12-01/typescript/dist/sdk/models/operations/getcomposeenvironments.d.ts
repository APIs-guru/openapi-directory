import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetComposeEnvironmentsActionEnum {
    ComposeEnvironments = "ComposeEnvironments"
}
export declare enum GetComposeEnvironmentsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetComposeEnvironmentsQueryParams extends SpeakeasyBase {
    action: GetComposeEnvironmentsActionEnum;
    applicationName?: string;
    groupName?: string;
    version: GetComposeEnvironmentsVersionEnum;
    versionLabels?: string[];
}
export declare class GetComposeEnvironmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetComposeEnvironmentsRequest extends SpeakeasyBase {
    queryParams: GetComposeEnvironmentsQueryParams;
    headers: GetComposeEnvironmentsHeaders;
}
export declare class GetComposeEnvironmentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
