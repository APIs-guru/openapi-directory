import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeFpgaImageAttributeActionEnum {
    DescribeFpgaImageAttribute = "DescribeFpgaImageAttribute"
}
export declare enum GetDescribeFpgaImageAttributeAttributeEnum {
    Description = "description",
    Name = "name",
    LoadPermission = "loadPermission",
    ProductCodes = "productCodes"
}
export declare enum GetDescribeFpgaImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeFpgaImageAttributeQueryParams extends SpeakeasyBase {
    action: GetDescribeFpgaImageAttributeActionEnum;
    attribute: GetDescribeFpgaImageAttributeAttributeEnum;
    dryRun?: boolean;
    fpgaImageId: string;
    version: GetDescribeFpgaImageAttributeVersionEnum;
}
export declare class GetDescribeFpgaImageAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeFpgaImageAttributeRequest extends SpeakeasyBase {
    queryParams: GetDescribeFpgaImageAttributeQueryParams;
    headers: GetDescribeFpgaImageAttributeHeaders;
}
export declare class GetDescribeFpgaImageAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
