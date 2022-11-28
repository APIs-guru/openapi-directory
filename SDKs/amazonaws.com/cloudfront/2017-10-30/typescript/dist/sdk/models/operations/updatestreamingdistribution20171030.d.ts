import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateStreamingDistribution20171030PathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateStreamingDistribution20171030Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateStreamingDistribution20171030Request extends SpeakeasyBase {
    pathParams: UpdateStreamingDistribution20171030PathParams;
    headers: UpdateStreamingDistribution20171030Headers;
    request: Uint8Array;
}
export declare class UpdateStreamingDistribution20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
