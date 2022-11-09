import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateCloudFrontOriginAccessIdentity20170325PathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateCloudFrontOriginAccessIdentity20170325Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateCloudFrontOriginAccessIdentity20170325Request extends SpeakeasyBase {
    pathParams: UpdateCloudFrontOriginAccessIdentity20170325PathParams;
    headers: UpdateCloudFrontOriginAccessIdentity20170325Headers;
    request: Uint8Array;
}
export declare class UpdateCloudFrontOriginAccessIdentity20170325Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
