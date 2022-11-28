import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeConnectionLoaXAmzTargetEnum {
    OvertureServiceDescribeConnectionLoa = "OvertureService.DescribeConnectionLoa"
}
export declare class DescribeConnectionLoaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConnectionLoaXAmzTargetEnum;
}
export declare class DescribeConnectionLoaRequest extends SpeakeasyBase {
    headers: DescribeConnectionLoaHeaders;
    request: shared.DescribeConnectionLoaRequest;
}
export declare class DescribeConnectionLoaResponse extends SpeakeasyBase {
    contentType: string;
    describeConnectionLoaResponse?: shared.DescribeConnectionLoaResponse;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
