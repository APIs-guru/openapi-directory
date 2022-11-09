import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteKeyPairActionEnum {
    DeleteKeyPair = "DeleteKeyPair"
}
export declare enum GetDeleteKeyPairVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteKeyPairQueryParams extends SpeakeasyBase {
    action: GetDeleteKeyPairActionEnum;
    dryRun?: boolean;
    keyName?: string;
    keyPairId?: string;
    version: GetDeleteKeyPairVersionEnum;
}
export declare class GetDeleteKeyPairHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteKeyPairRequest extends SpeakeasyBase {
    queryParams: GetDeleteKeyPairQueryParams;
    headers: GetDeleteKeyPairHeaders;
}
export declare class GetDeleteKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
