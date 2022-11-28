import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeStorageVirtualMachinesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeStorageVirtualMachinesXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DescribeStorageVirtualMachines = "AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines"
}
export declare class DescribeStorageVirtualMachinesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStorageVirtualMachinesXAmzTargetEnum;
}
export declare class DescribeStorageVirtualMachinesRequest extends SpeakeasyBase {
    queryParams: DescribeStorageVirtualMachinesQueryParams;
    headers: DescribeStorageVirtualMachinesHeaders;
    request: shared.DescribeStorageVirtualMachinesRequest;
}
export declare class DescribeStorageVirtualMachinesResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    describeStorageVirtualMachinesResponse?: shared.DescribeStorageVirtualMachinesResponse;
    internalServerError?: any;
    statusCode: number;
    storageVirtualMachineNotFound?: any;
}
