import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostReplaceIamInstanceProfileAssociationActionEnum {
    ReplaceIamInstanceProfileAssociation = "ReplaceIamInstanceProfileAssociation"
}
export declare enum PostReplaceIamInstanceProfileAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostReplaceIamInstanceProfileAssociationQueryParams extends SpeakeasyBase {
    action: PostReplaceIamInstanceProfileAssociationActionEnum;
    version: PostReplaceIamInstanceProfileAssociationVersionEnum;
}
export declare class PostReplaceIamInstanceProfileAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostReplaceIamInstanceProfileAssociationRequest extends SpeakeasyBase {
    queryParams: PostReplaceIamInstanceProfileAssociationQueryParams;
    headers: PostReplaceIamInstanceProfileAssociationHeaders;
    request?: Uint8Array;
}
export declare class PostReplaceIamInstanceProfileAssociationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
