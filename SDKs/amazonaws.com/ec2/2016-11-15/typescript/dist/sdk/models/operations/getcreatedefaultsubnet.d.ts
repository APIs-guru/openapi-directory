import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateDefaultSubnetActionEnum {
    CreateDefaultSubnet = "CreateDefaultSubnet"
}
export declare enum GetCreateDefaultSubnetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCreateDefaultSubnetQueryParams extends SpeakeasyBase {
    action: GetCreateDefaultSubnetActionEnum;
    availabilityZone: string;
    dryRun?: boolean;
    version: GetCreateDefaultSubnetVersionEnum;
}
export declare class GetCreateDefaultSubnetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateDefaultSubnetRequest extends SpeakeasyBase {
    queryParams: GetCreateDefaultSubnetQueryParams;
    headers: GetCreateDefaultSubnetHeaders;
}
export declare class GetCreateDefaultSubnetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
