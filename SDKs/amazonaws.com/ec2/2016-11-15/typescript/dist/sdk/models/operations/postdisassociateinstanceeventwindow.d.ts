import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDisassociateInstanceEventWindowActionEnum {
    DisassociateInstanceEventWindow = "DisassociateInstanceEventWindow"
}
export declare enum PostDisassociateInstanceEventWindowVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisassociateInstanceEventWindowQueryParams extends SpeakeasyBase {
    action: PostDisassociateInstanceEventWindowActionEnum;
    version: PostDisassociateInstanceEventWindowVersionEnum;
}
export declare class PostDisassociateInstanceEventWindowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisassociateInstanceEventWindowRequest extends SpeakeasyBase {
    queryParams: PostDisassociateInstanceEventWindowQueryParams;
    headers: PostDisassociateInstanceEventWindowHeaders;
    request?: Uint8Array;
}
export declare class PostDisassociateInstanceEventWindowResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
