import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeInterconnectLoaXAmzTargetEnum {
    OvertureServiceDescribeInterconnectLoa = "OvertureService.DescribeInterconnectLoa"
}
export declare class DescribeInterconnectLoaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInterconnectLoaXAmzTargetEnum;
}
export declare class DescribeInterconnectLoaRequest extends SpeakeasyBase {
    headers: DescribeInterconnectLoaHeaders;
    request: shared.DescribeInterconnectLoaRequest;
}
export declare class DescribeInterconnectLoaResponse extends SpeakeasyBase {
    contentType: string;
    describeInterconnectLoaResponse?: shared.DescribeInterconnectLoaResponse;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
