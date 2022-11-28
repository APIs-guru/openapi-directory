import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateDefaultVpcActionEnum {
    CreateDefaultVpc = "CreateDefaultVpc"
}
export declare enum GetCreateDefaultVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCreateDefaultVpcQueryParams extends SpeakeasyBase {
    action: GetCreateDefaultVpcActionEnum;
    dryRun?: boolean;
    version: GetCreateDefaultVpcVersionEnum;
}
export declare class GetCreateDefaultVpcHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateDefaultVpcRequest extends SpeakeasyBase {
    queryParams: GetCreateDefaultVpcQueryParams;
    headers: GetCreateDefaultVpcHeaders;
}
export declare class GetCreateDefaultVpcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
