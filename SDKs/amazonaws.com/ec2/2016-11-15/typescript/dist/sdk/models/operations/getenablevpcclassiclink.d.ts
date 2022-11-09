import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetEnableVpcClassicLinkActionEnum {
    EnableVpcClassicLink = "EnableVpcClassicLink"
}
export declare enum GetEnableVpcClassicLinkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetEnableVpcClassicLinkQueryParams extends SpeakeasyBase {
    action: GetEnableVpcClassicLinkActionEnum;
    dryRun?: boolean;
    version: GetEnableVpcClassicLinkVersionEnum;
    vpcId: string;
}
export declare class GetEnableVpcClassicLinkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnableVpcClassicLinkRequest extends SpeakeasyBase {
    queryParams: GetEnableVpcClassicLinkQueryParams;
    headers: GetEnableVpcClassicLinkHeaders;
}
export declare class GetEnableVpcClassicLinkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
