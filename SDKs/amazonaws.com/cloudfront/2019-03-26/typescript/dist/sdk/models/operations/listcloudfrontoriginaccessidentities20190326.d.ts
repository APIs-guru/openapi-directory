import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListCloudFrontOriginAccessIdentities20190326QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListCloudFrontOriginAccessIdentities20190326Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCloudFrontOriginAccessIdentities20190326Request extends SpeakeasyBase {
    queryParams: ListCloudFrontOriginAccessIdentities20190326QueryParams;
    headers: ListCloudFrontOriginAccessIdentities20190326Headers;
}
export declare class ListCloudFrontOriginAccessIdentities20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
