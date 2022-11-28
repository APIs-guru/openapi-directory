import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteSubnetActionEnum {
    DeleteSubnet = "DeleteSubnet"
}
export declare enum GetDeleteSubnetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteSubnetQueryParams extends SpeakeasyBase {
    action: GetDeleteSubnetActionEnum;
    dryRun?: boolean;
    subnetId: string;
    version: GetDeleteSubnetVersionEnum;
}
export declare class GetDeleteSubnetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteSubnetRequest extends SpeakeasyBase {
    queryParams: GetDeleteSubnetQueryParams;
    headers: GetDeleteSubnetHeaders;
}
export declare class GetDeleteSubnetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
