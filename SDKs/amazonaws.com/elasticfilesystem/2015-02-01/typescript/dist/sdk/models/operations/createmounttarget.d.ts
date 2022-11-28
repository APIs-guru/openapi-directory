import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateMountTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateMountTargetRequestBody extends SpeakeasyBase {
    fileSystemId: string;
    ipAddress?: string;
    securityGroups?: string[];
    subnetId: string;
}
export declare class CreateMountTargetRequest extends SpeakeasyBase {
    headers: CreateMountTargetHeaders;
    request: CreateMountTargetRequestBody;
}
export declare class CreateMountTargetResponse extends SpeakeasyBase {
    availabilityZonesMismatch?: any;
    badRequest?: any;
    contentType: string;
    fileSystemNotFound?: any;
    incorrectFileSystemLifeCycleState?: any;
    internalServerError?: any;
    ipAddressInUse?: any;
    mountTargetConflict?: any;
    mountTargetDescription?: shared.MountTargetDescription;
    networkInterfaceLimitExceeded?: any;
    noFreeAddressesInSubnet?: any;
    securityGroupLimitExceeded?: any;
    securityGroupNotFound?: any;
    statusCode: number;
    subnetNotFound?: any;
    unsupportedAvailabilityZone?: any;
}
