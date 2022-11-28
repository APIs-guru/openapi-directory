import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateStorageVirtualMachineXAmzTargetEnum {
    AwsSimbaApiServiceV20180301UpdateStorageVirtualMachine = "AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine"
}
export declare class UpdateStorageVirtualMachineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateStorageVirtualMachineXAmzTargetEnum;
}
export declare class UpdateStorageVirtualMachineRequest extends SpeakeasyBase {
    headers: UpdateStorageVirtualMachineHeaders;
    request: shared.UpdateStorageVirtualMachineRequest;
}
export declare class UpdateStorageVirtualMachineResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    incompatibleParameterError?: any;
    internalServerError?: any;
    statusCode: number;
    storageVirtualMachineNotFound?: any;
    unsupportedOperation?: any;
    updateStorageVirtualMachineResponse?: shared.UpdateStorageVirtualMachineResponse;
}
