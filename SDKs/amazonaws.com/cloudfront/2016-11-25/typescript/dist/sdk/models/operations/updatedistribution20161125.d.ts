import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateDistribution20161125PathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateDistribution20161125Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDistribution20161125Request extends SpeakeasyBase {
    pathParams: UpdateDistribution20161125PathParams;
    headers: UpdateDistribution20161125Headers;
    request: Uint8Array;
}
export declare class UpdateDistribution20161125Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
