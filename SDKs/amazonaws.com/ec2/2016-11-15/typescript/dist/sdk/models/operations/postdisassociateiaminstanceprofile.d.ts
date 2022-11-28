import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDisassociateIamInstanceProfileActionEnum {
    DisassociateIamInstanceProfile = "DisassociateIamInstanceProfile"
}
export declare enum PostDisassociateIamInstanceProfileVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisassociateIamInstanceProfileQueryParams extends SpeakeasyBase {
    action: PostDisassociateIamInstanceProfileActionEnum;
    version: PostDisassociateIamInstanceProfileVersionEnum;
}
export declare class PostDisassociateIamInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisassociateIamInstanceProfileRequest extends SpeakeasyBase {
    queryParams: PostDisassociateIamInstanceProfileQueryParams;
    headers: PostDisassociateIamInstanceProfileHeaders;
    request?: Uint8Array;
}
export declare class PostDisassociateIamInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
