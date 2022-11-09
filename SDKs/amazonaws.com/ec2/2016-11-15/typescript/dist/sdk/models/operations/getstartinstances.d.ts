import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetStartInstancesActionEnum {
    StartInstances = "StartInstances"
}
export declare enum GetStartInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetStartInstancesQueryParams extends SpeakeasyBase {
    action: GetStartInstancesActionEnum;
    additionalInfo?: string;
    dryRun?: boolean;
    instanceId: string[];
    version: GetStartInstancesVersionEnum;
}
export declare class GetStartInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStartInstancesRequest extends SpeakeasyBase {
    queryParams: GetStartInstancesQueryParams;
    headers: GetStartInstancesHeaders;
}
export declare class GetStartInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
