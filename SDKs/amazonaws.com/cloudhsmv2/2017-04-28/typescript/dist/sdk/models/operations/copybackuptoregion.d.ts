import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CopyBackupToRegionXAmzTargetEnum {
    BaldrApiServiceCopyBackupToRegion = "BaldrApiService.CopyBackupToRegion"
}
export declare class CopyBackupToRegionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CopyBackupToRegionXAmzTargetEnum;
}
export declare class CopyBackupToRegionRequest extends SpeakeasyBase {
    headers: CopyBackupToRegionHeaders;
    request: shared.CopyBackupToRegionRequest;
}
export declare class CopyBackupToRegionResponse extends SpeakeasyBase {
    cloudHsmAccessDeniedException?: any;
    cloudHsmInternalFailureException?: any;
    cloudHsmInvalidRequestException?: any;
    cloudHsmResourceNotFoundException?: any;
    cloudHsmServiceException?: any;
    cloudHsmTagException?: any;
    contentType: string;
    copyBackupToRegionResponse?: shared.CopyBackupToRegionResponse;
    statusCode: number;
}
