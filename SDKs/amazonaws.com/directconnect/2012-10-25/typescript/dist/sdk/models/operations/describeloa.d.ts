import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeLoaXAmzTargetEnum {
    OvertureServiceDescribeLoa = "OvertureService.DescribeLoa"
}
export declare class DescribeLoaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLoaXAmzTargetEnum;
}
export declare class DescribeLoaRequest extends SpeakeasyBase {
    headers: DescribeLoaHeaders;
    request: shared.DescribeLoaRequest;
}
export declare class DescribeLoaResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    loa?: shared.Loa;
    statusCode: number;
}
