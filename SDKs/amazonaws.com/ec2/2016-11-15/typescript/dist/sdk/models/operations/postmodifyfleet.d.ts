import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyFleetActionEnum {
    ModifyFleet = "ModifyFleet"
}
export declare enum PostModifyFleetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyFleetQueryParams extends SpeakeasyBase {
    action: PostModifyFleetActionEnum;
    version: PostModifyFleetVersionEnum;
}
export declare class PostModifyFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyFleetRequest extends SpeakeasyBase {
    queryParams: PostModifyFleetQueryParams;
    headers: PostModifyFleetHeaders;
    request?: Uint8Array;
}
export declare class PostModifyFleetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
