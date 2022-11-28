import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateVpcPeeringConnectionActionEnum {
    CreateVpcPeeringConnection = "CreateVpcPeeringConnection"
}
export declare enum PostCreateVpcPeeringConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateVpcPeeringConnectionQueryParams extends SpeakeasyBase {
    action: PostCreateVpcPeeringConnectionActionEnum;
    version: PostCreateVpcPeeringConnectionVersionEnum;
}
export declare class PostCreateVpcPeeringConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateVpcPeeringConnectionRequest extends SpeakeasyBase {
    queryParams: PostCreateVpcPeeringConnectionQueryParams;
    headers: PostCreateVpcPeeringConnectionHeaders;
    request?: Uint8Array;
}
export declare class PostCreateVpcPeeringConnectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
