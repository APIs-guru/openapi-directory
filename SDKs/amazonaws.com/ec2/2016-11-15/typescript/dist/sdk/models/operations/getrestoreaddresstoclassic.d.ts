import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRestoreAddressToClassicActionEnum {
    RestoreAddressToClassic = "RestoreAddressToClassic"
}
export declare enum GetRestoreAddressToClassicVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetRestoreAddressToClassicQueryParams extends SpeakeasyBase {
    action: GetRestoreAddressToClassicActionEnum;
    dryRun?: boolean;
    publicIp: string;
    version: GetRestoreAddressToClassicVersionEnum;
}
export declare class GetRestoreAddressToClassicHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRestoreAddressToClassicRequest extends SpeakeasyBase {
    queryParams: GetRestoreAddressToClassicQueryParams;
    headers: GetRestoreAddressToClassicHeaders;
}
export declare class GetRestoreAddressToClassicResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
