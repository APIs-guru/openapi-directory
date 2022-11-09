import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteDistribution20180618PathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteDistribution20180618Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDistribution20180618Request extends SpeakeasyBase {
    pathParams: DeleteDistribution20180618PathParams;
    headers: DeleteDistribution20180618Headers;
}
export declare class DeleteDistribution20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
