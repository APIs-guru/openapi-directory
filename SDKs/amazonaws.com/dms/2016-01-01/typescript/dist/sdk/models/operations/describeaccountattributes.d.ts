import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAccountAttributesXAmzTargetEnum {
    AmazonDmSv20160101DescribeAccountAttributes = "AmazonDMSv20160101.DescribeAccountAttributes"
}
export declare class DescribeAccountAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAccountAttributesXAmzTargetEnum;
}
export declare class DescribeAccountAttributesRequest extends SpeakeasyBase {
    headers: DescribeAccountAttributesHeaders;
    request: Map<string, any>;
}
export declare class DescribeAccountAttributesResponse extends SpeakeasyBase {
    contentType: string;
    describeAccountAttributesResponse?: shared.DescribeAccountAttributesResponse;
    statusCode: number;
}
