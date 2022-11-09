import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDisableVpcClassicLinkActionEnum {
    DisableVpcClassicLink = "DisableVpcClassicLink"
}
export declare enum GetDisableVpcClassicLinkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDisableVpcClassicLinkQueryParams extends SpeakeasyBase {
    action: GetDisableVpcClassicLinkActionEnum;
    dryRun?: boolean;
    version: GetDisableVpcClassicLinkVersionEnum;
    vpcId: string;
}
export declare class GetDisableVpcClassicLinkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisableVpcClassicLinkRequest extends SpeakeasyBase {
    queryParams: GetDisableVpcClassicLinkQueryParams;
    headers: GetDisableVpcClassicLinkHeaders;
}
export declare class GetDisableVpcClassicLinkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
