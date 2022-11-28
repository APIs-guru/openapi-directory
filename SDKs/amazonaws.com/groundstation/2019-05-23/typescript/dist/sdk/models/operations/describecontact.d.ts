import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeContactPathParams extends SpeakeasyBase {
    contactId: string;
}
export declare class DescribeContactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeContactRequest extends SpeakeasyBase {
    pathParams: DescribeContactPathParams;
    headers: DescribeContactHeaders;
}
export declare class DescribeContactResponse extends SpeakeasyBase {
    contentType: string;
    dependencyException?: any;
    describeContactResponse?: shared.DescribeContactResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
