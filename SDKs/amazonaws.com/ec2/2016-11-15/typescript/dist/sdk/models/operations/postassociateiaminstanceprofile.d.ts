import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAssociateIamInstanceProfileActionEnum {
    AssociateIamInstanceProfile = "AssociateIamInstanceProfile"
}
export declare enum PostAssociateIamInstanceProfileVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAssociateIamInstanceProfileQueryParams extends SpeakeasyBase {
    action: PostAssociateIamInstanceProfileActionEnum;
    version: PostAssociateIamInstanceProfileVersionEnum;
}
export declare class PostAssociateIamInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssociateIamInstanceProfileRequest extends SpeakeasyBase {
    queryParams: PostAssociateIamInstanceProfileQueryParams;
    headers: PostAssociateIamInstanceProfileHeaders;
    request?: Uint8Array;
}
export declare class PostAssociateIamInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
