import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAcceptVpcPeeringConnectionActionEnum {
    AcceptVpcPeeringConnection = "AcceptVpcPeeringConnection"
}
export declare enum PostAcceptVpcPeeringConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAcceptVpcPeeringConnectionQueryParams extends SpeakeasyBase {
    action: PostAcceptVpcPeeringConnectionActionEnum;
    version: PostAcceptVpcPeeringConnectionVersionEnum;
}
export declare class PostAcceptVpcPeeringConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAcceptVpcPeeringConnectionRequest extends SpeakeasyBase {
    queryParams: PostAcceptVpcPeeringConnectionQueryParams;
    headers: PostAcceptVpcPeeringConnectionHeaders;
    request?: Uint8Array;
}
export declare class PostAcceptVpcPeeringConnectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
