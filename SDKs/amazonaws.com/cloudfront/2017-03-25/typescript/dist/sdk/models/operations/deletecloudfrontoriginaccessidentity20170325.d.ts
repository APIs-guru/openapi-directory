import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteCloudFrontOriginAccessIdentity20170325PathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteCloudFrontOriginAccessIdentity20170325Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteCloudFrontOriginAccessIdentity20170325Request extends SpeakeasyBase {
    pathParams: DeleteCloudFrontOriginAccessIdentity20170325PathParams;
    headers: DeleteCloudFrontOriginAccessIdentity20170325Headers;
}
export declare class DeleteCloudFrontOriginAccessIdentity20170325Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
