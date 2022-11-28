import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetReplaceIamInstanceProfileAssociationActionEnum {
    ReplaceIamInstanceProfileAssociation = "ReplaceIamInstanceProfileAssociation"
}
/**
 * Describes an IAM instance profile.
**/
export declare class GetReplaceIamInstanceProfileAssociationIamInstanceProfile extends SpeakeasyBase {
    arn?: string;
    name?: string;
}
export declare enum GetReplaceIamInstanceProfileAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetReplaceIamInstanceProfileAssociationQueryParams extends SpeakeasyBase {
    action: GetReplaceIamInstanceProfileAssociationActionEnum;
    associationId: string;
    iamInstanceProfile: GetReplaceIamInstanceProfileAssociationIamInstanceProfile;
    version: GetReplaceIamInstanceProfileAssociationVersionEnum;
}
export declare class GetReplaceIamInstanceProfileAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetReplaceIamInstanceProfileAssociationRequest extends SpeakeasyBase {
    queryParams: GetReplaceIamInstanceProfileAssociationQueryParams;
    headers: GetReplaceIamInstanceProfileAssociationHeaders;
}
export declare class GetReplaceIamInstanceProfileAssociationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
