import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAssociateInstanceEventWindowActionEnum {
    AssociateInstanceEventWindow = "AssociateInstanceEventWindow"
}
export declare enum PostAssociateInstanceEventWindowVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAssociateInstanceEventWindowQueryParams extends SpeakeasyBase {
    action: PostAssociateInstanceEventWindowActionEnum;
    version: PostAssociateInstanceEventWindowVersionEnum;
}
export declare class PostAssociateInstanceEventWindowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssociateInstanceEventWindowRequest extends SpeakeasyBase {
    queryParams: PostAssociateInstanceEventWindowQueryParams;
    headers: PostAssociateInstanceEventWindowHeaders;
    request?: Uint8Array;
}
export declare class PostAssociateInstanceEventWindowResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
