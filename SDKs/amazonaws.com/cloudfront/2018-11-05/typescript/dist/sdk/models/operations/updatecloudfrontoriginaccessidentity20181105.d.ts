import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateCloudFrontOriginAccessIdentity20181105PathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateCloudFrontOriginAccessIdentity20181105Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateCloudFrontOriginAccessIdentity20181105Request extends SpeakeasyBase {
    pathParams: UpdateCloudFrontOriginAccessIdentity20181105PathParams;
    headers: UpdateCloudFrontOriginAccessIdentity20181105Headers;
    request: Uint8Array;
}
export declare class UpdateCloudFrontOriginAccessIdentity20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
