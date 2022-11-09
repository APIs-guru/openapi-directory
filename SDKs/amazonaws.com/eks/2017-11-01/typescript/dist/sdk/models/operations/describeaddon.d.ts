import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeAddonPathParams extends SpeakeasyBase {
    addonName: string;
    name: string;
}
export declare class DescribeAddonHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAddonRequest extends SpeakeasyBase {
    pathParams: DescribeAddonPathParams;
    headers: DescribeAddonHeaders;
}
export declare class DescribeAddonResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeAddonResponse?: shared.DescribeAddonResponse;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
