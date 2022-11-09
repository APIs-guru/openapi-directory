import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAssociateIamInstanceProfileActionEnum {
    AssociateIamInstanceProfile = "AssociateIamInstanceProfile"
}
/**
 * Describes an IAM instance profile.
**/
export declare class GetAssociateIamInstanceProfileIamInstanceProfile extends SpeakeasyBase {
    arn?: string;
    name?: string;
}
export declare enum GetAssociateIamInstanceProfileVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAssociateIamInstanceProfileQueryParams extends SpeakeasyBase {
    action: GetAssociateIamInstanceProfileActionEnum;
    iamInstanceProfile: GetAssociateIamInstanceProfileIamInstanceProfile;
    instanceId: string;
    version: GetAssociateIamInstanceProfileVersionEnum;
}
export declare class GetAssociateIamInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssociateIamInstanceProfileRequest extends SpeakeasyBase {
    queryParams: GetAssociateIamInstanceProfileQueryParams;
    headers: GetAssociateIamInstanceProfileHeaders;
}
export declare class GetAssociateIamInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
