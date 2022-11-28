import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifySpotFleetRequestActionEnum {
    ModifySpotFleetRequest = "ModifySpotFleetRequest"
}
export declare enum PostModifySpotFleetRequestVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifySpotFleetRequestQueryParams extends SpeakeasyBase {
    action: PostModifySpotFleetRequestActionEnum;
    version: PostModifySpotFleetRequestVersionEnum;
}
export declare class PostModifySpotFleetRequestHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifySpotFleetRequestRequest extends SpeakeasyBase {
    queryParams: PostModifySpotFleetRequestQueryParams;
    headers: PostModifySpotFleetRequestHeaders;
    request?: Uint8Array;
}
export declare class PostModifySpotFleetRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
