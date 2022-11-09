import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListCloudFrontOriginAccessIdentities20180618QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListCloudFrontOriginAccessIdentities20180618Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCloudFrontOriginAccessIdentities20180618Request extends SpeakeasyBase {
    queryParams: ListCloudFrontOriginAccessIdentities20180618QueryParams;
    headers: ListCloudFrontOriginAccessIdentities20180618Headers;
}
export declare class ListCloudFrontOriginAccessIdentities20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
