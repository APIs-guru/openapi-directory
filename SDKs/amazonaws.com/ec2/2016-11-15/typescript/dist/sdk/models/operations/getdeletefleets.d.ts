import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteFleetsActionEnum {
    DeleteFleets = "DeleteFleets"
}
export declare enum GetDeleteFleetsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteFleetsQueryParams extends SpeakeasyBase {
    action: GetDeleteFleetsActionEnum;
    dryRun?: boolean;
    fleetId: string[];
    terminateInstances: boolean;
    version: GetDeleteFleetsVersionEnum;
}
export declare class GetDeleteFleetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteFleetsRequest extends SpeakeasyBase {
    queryParams: GetDeleteFleetsQueryParams;
    headers: GetDeleteFleetsHeaders;
}
export declare class GetDeleteFleetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
