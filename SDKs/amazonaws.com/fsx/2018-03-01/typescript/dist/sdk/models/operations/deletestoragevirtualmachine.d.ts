import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteStorageVirtualMachineXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DeleteStorageVirtualMachine = "AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine"
}
export declare class DeleteStorageVirtualMachineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteStorageVirtualMachineXAmzTargetEnum;
}
export declare class DeleteStorageVirtualMachineRequest extends SpeakeasyBase {
    headers: DeleteStorageVirtualMachineHeaders;
    request: shared.DeleteStorageVirtualMachineRequest;
}
export declare class DeleteStorageVirtualMachineResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    deleteStorageVirtualMachineResponse?: shared.DeleteStorageVirtualMachineResponse;
    incompatibleParameterError?: any;
    internalServerError?: any;
    statusCode: number;
    storageVirtualMachineNotFound?: any;
}
