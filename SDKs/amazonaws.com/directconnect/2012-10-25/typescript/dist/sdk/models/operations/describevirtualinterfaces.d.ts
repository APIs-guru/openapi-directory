import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeVirtualInterfacesXAmzTargetEnum {
    OvertureServiceDescribeVirtualInterfaces = "OvertureService.DescribeVirtualInterfaces"
}
export declare class DescribeVirtualInterfacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeVirtualInterfacesXAmzTargetEnum;
}
export declare class DescribeVirtualInterfacesRequest extends SpeakeasyBase {
    headers: DescribeVirtualInterfacesHeaders;
    request: shared.DescribeVirtualInterfacesRequest;
}
export declare class DescribeVirtualInterfacesResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
    virtualInterfaces?: shared.VirtualInterfaces;
}
