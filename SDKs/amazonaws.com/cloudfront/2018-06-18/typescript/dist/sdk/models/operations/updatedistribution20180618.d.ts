import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDistribution20180618PathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateDistribution20180618Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDistribution20180618Request extends SpeakeasyBase {
    pathParams: UpdateDistribution20180618PathParams;
    headers: UpdateDistribution20180618Headers;
    request: Uint8Array;
}
export declare class UpdateDistribution20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
