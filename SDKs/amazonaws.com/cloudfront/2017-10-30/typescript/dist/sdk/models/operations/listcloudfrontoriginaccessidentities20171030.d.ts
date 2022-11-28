import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListCloudFrontOriginAccessIdentities20171030QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListCloudFrontOriginAccessIdentities20171030Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCloudFrontOriginAccessIdentities20171030Request extends SpeakeasyBase {
    queryParams: ListCloudFrontOriginAccessIdentities20171030QueryParams;
    headers: ListCloudFrontOriginAccessIdentities20171030Headers;
}
export declare class ListCloudFrontOriginAccessIdentities20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
