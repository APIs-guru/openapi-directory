import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCloudFrontOriginAccessIdentity20190326PathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteCloudFrontOriginAccessIdentity20190326Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteCloudFrontOriginAccessIdentity20190326Request extends SpeakeasyBase {
    pathParams: DeleteCloudFrontOriginAccessIdentity20190326PathParams;
    headers: DeleteCloudFrontOriginAccessIdentity20190326Headers;
}
export declare class DeleteCloudFrontOriginAccessIdentity20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
