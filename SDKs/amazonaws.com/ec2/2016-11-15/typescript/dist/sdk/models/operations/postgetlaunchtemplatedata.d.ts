import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetLaunchTemplateDataActionEnum {
    GetLaunchTemplateData = "GetLaunchTemplateData"
}
export declare enum PostGetLaunchTemplateDataVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetLaunchTemplateDataQueryParams extends SpeakeasyBase {
    action: PostGetLaunchTemplateDataActionEnum;
    version: PostGetLaunchTemplateDataVersionEnum;
}
export declare class PostGetLaunchTemplateDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetLaunchTemplateDataRequest extends SpeakeasyBase {
    queryParams: PostGetLaunchTemplateDataQueryParams;
    headers: PostGetLaunchTemplateDataHeaders;
    request?: Uint8Array;
}
export declare class PostGetLaunchTemplateDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
