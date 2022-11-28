import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeUserProfileXAmzTargetEnum {
    CodeStar20170419DescribeUserProfile = "CodeStar_20170419.DescribeUserProfile"
}
export declare class DescribeUserProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUserProfileXAmzTargetEnum;
}
export declare class DescribeUserProfileRequest extends SpeakeasyBase {
    headers: DescribeUserProfileHeaders;
    request: shared.DescribeUserProfileRequest;
}
export declare class DescribeUserProfileResponse extends SpeakeasyBase {
    contentType: string;
    describeUserProfileResult?: shared.DescribeUserProfileResult;
    statusCode: number;
    userProfileNotFoundException?: any;
    validationException?: any;
}
