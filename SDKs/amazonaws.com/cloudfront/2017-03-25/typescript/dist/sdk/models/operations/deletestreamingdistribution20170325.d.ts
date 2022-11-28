import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteStreamingDistribution20170325PathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteStreamingDistribution20170325Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteStreamingDistribution20170325Request extends SpeakeasyBase {
    pathParams: DeleteStreamingDistribution20170325PathParams;
    headers: DeleteStreamingDistribution20170325Headers;
}
export declare class DeleteStreamingDistribution20170325Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
