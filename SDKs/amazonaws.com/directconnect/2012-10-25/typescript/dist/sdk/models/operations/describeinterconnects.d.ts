import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeInterconnectsXAmzTargetEnum {
    OvertureServiceDescribeInterconnects = "OvertureService.DescribeInterconnects"
}
export declare class DescribeInterconnectsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInterconnectsXAmzTargetEnum;
}
export declare class DescribeInterconnectsRequest extends SpeakeasyBase {
    headers: DescribeInterconnectsHeaders;
    request: shared.DescribeInterconnectsRequest;
}
export declare class DescribeInterconnectsResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    interconnects?: shared.Interconnects;
    statusCode: number;
}
