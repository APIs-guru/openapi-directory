import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRejectVpcPeeringConnectionActionEnum {
    RejectVpcPeeringConnection = "RejectVpcPeeringConnection"
}
export declare enum PostRejectVpcPeeringConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRejectVpcPeeringConnectionQueryParams extends SpeakeasyBase {
    action: PostRejectVpcPeeringConnectionActionEnum;
    version: PostRejectVpcPeeringConnectionVersionEnum;
}
export declare class PostRejectVpcPeeringConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRejectVpcPeeringConnectionRequest extends SpeakeasyBase {
    queryParams: PostRejectVpcPeeringConnectionQueryParams;
    headers: PostRejectVpcPeeringConnectionHeaders;
    request?: Uint8Array;
}
export declare class PostRejectVpcPeeringConnectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
