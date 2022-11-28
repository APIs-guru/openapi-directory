import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDistribution20190326PathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteDistribution20190326Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDistribution20190326Request extends SpeakeasyBase {
    pathParams: DeleteDistribution20190326PathParams;
    headers: DeleteDistribution20190326Headers;
}
export declare class DeleteDistribution20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
