import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateDistribution20171030Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDistribution20171030Request extends SpeakeasyBase {
    headers: CreateDistribution20171030Headers;
    request: Uint8Array;
}
export declare class CreateDistribution20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
