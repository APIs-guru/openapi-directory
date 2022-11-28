import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteVpcPeeringConnectionActionEnum {
    DeleteVpcPeeringConnection = "DeleteVpcPeeringConnection"
}
export declare enum PostDeleteVpcPeeringConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteVpcPeeringConnectionQueryParams extends SpeakeasyBase {
    action: PostDeleteVpcPeeringConnectionActionEnum;
    version: PostDeleteVpcPeeringConnectionVersionEnum;
}
export declare class PostDeleteVpcPeeringConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteVpcPeeringConnectionRequest extends SpeakeasyBase {
    queryParams: PostDeleteVpcPeeringConnectionQueryParams;
    headers: PostDeleteVpcPeeringConnectionHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteVpcPeeringConnectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
