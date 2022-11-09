import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyInstanceEventStartTimeActionEnum {
    ModifyInstanceEventStartTime = "ModifyInstanceEventStartTime"
}
export declare enum PostModifyInstanceEventStartTimeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyInstanceEventStartTimeQueryParams extends SpeakeasyBase {
    action: PostModifyInstanceEventStartTimeActionEnum;
    version: PostModifyInstanceEventStartTimeVersionEnum;
}
export declare class PostModifyInstanceEventStartTimeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyInstanceEventStartTimeRequest extends SpeakeasyBase {
    queryParams: PostModifyInstanceEventStartTimeQueryParams;
    headers: PostModifyInstanceEventStartTimeHeaders;
    request?: Uint8Array;
}
export declare class PostModifyInstanceEventStartTimeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
