import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateStorageVirtualMachineXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateStorageVirtualMachine = "AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine"
}
export declare class CreateStorageVirtualMachineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStorageVirtualMachineXAmzTargetEnum;
}
export declare class CreateStorageVirtualMachineRequest extends SpeakeasyBase {
    headers: CreateStorageVirtualMachineHeaders;
    request: shared.CreateStorageVirtualMachineRequest;
}
export declare class CreateStorageVirtualMachineResponse extends SpeakeasyBase {
    activeDirectoryError?: any;
    badRequest?: any;
    contentType: string;
    createStorageVirtualMachineResponse?: shared.CreateStorageVirtualMachineResponse;
    fileSystemNotFound?: any;
    incompatibleParameterError?: any;
    internalServerError?: any;
    serviceLimitExceeded?: any;
    statusCode: number;
    unsupportedOperation?: any;
}
