import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateFleetActionEnum {
    CreateFleet = "CreateFleet"
}
export declare enum PostCreateFleetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateFleetQueryParams extends SpeakeasyBase {
    action: PostCreateFleetActionEnum;
    version: PostCreateFleetVersionEnum;
}
export declare class PostCreateFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateFleetRequest extends SpeakeasyBase {
    queryParams: PostCreateFleetQueryParams;
    headers: PostCreateFleetHeaders;
    request?: Uint8Array;
}
export declare class PostCreateFleetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
