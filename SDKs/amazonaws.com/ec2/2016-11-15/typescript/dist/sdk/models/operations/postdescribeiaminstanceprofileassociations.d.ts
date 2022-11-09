import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeIamInstanceProfileAssociationsActionEnum {
    DescribeIamInstanceProfileAssociations = "DescribeIamInstanceProfileAssociations"
}
export declare enum PostDescribeIamInstanceProfileAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeIamInstanceProfileAssociationsQueryParams extends SpeakeasyBase {
    action: PostDescribeIamInstanceProfileAssociationsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeIamInstanceProfileAssociationsVersionEnum;
}
export declare class PostDescribeIamInstanceProfileAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeIamInstanceProfileAssociationsRequest extends SpeakeasyBase {
    queryParams: PostDescribeIamInstanceProfileAssociationsQueryParams;
    headers: PostDescribeIamInstanceProfileAssociationsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeIamInstanceProfileAssociationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
