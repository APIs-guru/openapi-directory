import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeSecurityGroupReferencesActionEnum {
    DescribeSecurityGroupReferences = "DescribeSecurityGroupReferences"
}
export declare enum PostDescribeSecurityGroupReferencesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeSecurityGroupReferencesQueryParams extends SpeakeasyBase {
    action: PostDescribeSecurityGroupReferencesActionEnum;
    version: PostDescribeSecurityGroupReferencesVersionEnum;
}
export declare class PostDescribeSecurityGroupReferencesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSecurityGroupReferencesRequest extends SpeakeasyBase {
    queryParams: PostDescribeSecurityGroupReferencesQueryParams;
    headers: PostDescribeSecurityGroupReferencesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSecurityGroupReferencesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
