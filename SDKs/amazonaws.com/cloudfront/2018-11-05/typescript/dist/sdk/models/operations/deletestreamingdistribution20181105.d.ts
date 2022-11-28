import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteStreamingDistribution20181105PathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteStreamingDistribution20181105Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteStreamingDistribution20181105Request extends SpeakeasyBase {
    pathParams: DeleteStreamingDistribution20181105PathParams;
    headers: DeleteStreamingDistribution20181105Headers;
}
export declare class DeleteStreamingDistribution20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
