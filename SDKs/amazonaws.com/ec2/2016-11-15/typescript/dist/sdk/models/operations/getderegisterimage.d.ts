import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeregisterImageActionEnum {
    DeregisterImage = "DeregisterImage"
}
export declare enum GetDeregisterImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeregisterImageQueryParams extends SpeakeasyBase {
    action: GetDeregisterImageActionEnum;
    dryRun?: boolean;
    imageId: string;
    version: GetDeregisterImageVersionEnum;
}
export declare class GetDeregisterImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeregisterImageRequest extends SpeakeasyBase {
    queryParams: GetDeregisterImageQueryParams;
    headers: GetDeregisterImageHeaders;
}
export declare class GetDeregisterImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
