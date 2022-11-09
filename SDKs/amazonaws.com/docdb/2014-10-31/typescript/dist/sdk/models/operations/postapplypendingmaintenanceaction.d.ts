import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostApplyPendingMaintenanceActionActionEnum {
    ApplyPendingMaintenanceAction = "ApplyPendingMaintenanceAction"
}
export declare enum PostApplyPendingMaintenanceActionVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostApplyPendingMaintenanceActionQueryParams extends SpeakeasyBase {
    action: PostApplyPendingMaintenanceActionActionEnum;
    version: PostApplyPendingMaintenanceActionVersionEnum;
}
export declare class PostApplyPendingMaintenanceActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostApplyPendingMaintenanceActionRequest extends SpeakeasyBase {
    queryParams: PostApplyPendingMaintenanceActionQueryParams;
    headers: PostApplyPendingMaintenanceActionHeaders;
    request?: Uint8Array;
}
export declare class PostApplyPendingMaintenanceActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
