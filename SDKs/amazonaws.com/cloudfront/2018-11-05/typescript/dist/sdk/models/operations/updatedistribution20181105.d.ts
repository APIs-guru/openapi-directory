import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateDistribution20181105PathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateDistribution20181105Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDistribution20181105Request extends SpeakeasyBase {
    pathParams: UpdateDistribution20181105PathParams;
    headers: UpdateDistribution20181105Headers;
    request: Uint8Array;
}
export declare class UpdateDistribution20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
