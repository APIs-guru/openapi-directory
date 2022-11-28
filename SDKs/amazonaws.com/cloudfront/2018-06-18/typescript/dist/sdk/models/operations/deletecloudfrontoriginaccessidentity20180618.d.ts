import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCloudFrontOriginAccessIdentity20180618PathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteCloudFrontOriginAccessIdentity20180618Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteCloudFrontOriginAccessIdentity20180618Request extends SpeakeasyBase {
    pathParams: DeleteCloudFrontOriginAccessIdentity20180618PathParams;
    headers: DeleteCloudFrontOriginAccessIdentity20180618Headers;
}
export declare class DeleteCloudFrontOriginAccessIdentity20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
