import { SpeakeasyBase } from "../../../internal/utils";
export declare class PublishFunction20200531PathParams extends SpeakeasyBase {
    name: string;
}
export declare class PublishFunction20200531Headers extends SpeakeasyBase {
    ifMatch: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PublishFunction20200531Request extends SpeakeasyBase {
    pathParams: PublishFunction20200531PathParams;
    headers: PublishFunction20200531Headers;
}
export declare class PublishFunction20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
