import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDistribution20170325PathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateDistribution20170325Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDistribution20170325Request extends SpeakeasyBase {
    pathParams: UpdateDistribution20170325PathParams;
    headers: UpdateDistribution20170325Headers;
    request: Uint8Array;
}
export declare class UpdateDistribution20170325Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
