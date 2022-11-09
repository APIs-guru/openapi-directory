import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeEventCategoriesXAmzTargetEnum {
    AmazonDmSv20160101DescribeEventCategories = "AmazonDMSv20160101.DescribeEventCategories"
}
export declare class DescribeEventCategoriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEventCategoriesXAmzTargetEnum;
}
export declare class DescribeEventCategoriesRequest extends SpeakeasyBase {
    headers: DescribeEventCategoriesHeaders;
    request: shared.DescribeEventCategoriesMessage;
}
export declare class DescribeEventCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    describeEventCategoriesResponse?: shared.DescribeEventCategoriesResponse;
    statusCode: number;
}
