import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeEnvironmentManagedActionsActionEnum {
    DescribeEnvironmentManagedActions = "DescribeEnvironmentManagedActions"
}
export declare enum GetDescribeEnvironmentManagedActionsStatusEnum {
    Scheduled = "Scheduled",
    Pending = "Pending",
    Running = "Running",
    Unknown = "Unknown"
}
export declare enum GetDescribeEnvironmentManagedActionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDescribeEnvironmentManagedActionsQueryParams extends SpeakeasyBase {
    action: GetDescribeEnvironmentManagedActionsActionEnum;
    environmentId?: string;
    environmentName?: string;
    status?: GetDescribeEnvironmentManagedActionsStatusEnum;
    version: GetDescribeEnvironmentManagedActionsVersionEnum;
}
export declare class GetDescribeEnvironmentManagedActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeEnvironmentManagedActionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeEnvironmentManagedActionsQueryParams;
    headers: GetDescribeEnvironmentManagedActionsHeaders;
}
export declare class GetDescribeEnvironmentManagedActionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
