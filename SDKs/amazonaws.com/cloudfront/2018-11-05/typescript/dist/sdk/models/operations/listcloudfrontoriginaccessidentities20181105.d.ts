import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListCloudFrontOriginAccessIdentities20181105QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListCloudFrontOriginAccessIdentities20181105Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCloudFrontOriginAccessIdentities20181105Request extends SpeakeasyBase {
    queryParams: ListCloudFrontOriginAccessIdentities20181105QueryParams;
    headers: ListCloudFrontOriginAccessIdentities20181105Headers;
}
export declare class ListCloudFrontOriginAccessIdentities20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
