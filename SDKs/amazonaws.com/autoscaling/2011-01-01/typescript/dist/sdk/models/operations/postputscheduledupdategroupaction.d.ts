import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPutScheduledUpdateGroupActionActionEnum {
    PutScheduledUpdateGroupAction = "PutScheduledUpdateGroupAction"
}
export declare enum PostPutScheduledUpdateGroupActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostPutScheduledUpdateGroupActionQueryParams extends SpeakeasyBase {
    action: PostPutScheduledUpdateGroupActionActionEnum;
    version: PostPutScheduledUpdateGroupActionVersionEnum;
}
export declare class PostPutScheduledUpdateGroupActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutScheduledUpdateGroupActionRequest extends SpeakeasyBase {
    queryParams: PostPutScheduledUpdateGroupActionQueryParams;
    headers: PostPutScheduledUpdateGroupActionHeaders;
    request?: Uint8Array;
}
export declare class PostPutScheduledUpdateGroupActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
