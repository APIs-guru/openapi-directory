import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateDistribution20200531PathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateDistribution20200531Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDistribution20200531Request extends SpeakeasyBase {
    pathParams: UpdateDistribution20200531PathParams;
    headers: UpdateDistribution20200531Headers;
    request: Uint8Array;
}
export declare class UpdateDistribution20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
