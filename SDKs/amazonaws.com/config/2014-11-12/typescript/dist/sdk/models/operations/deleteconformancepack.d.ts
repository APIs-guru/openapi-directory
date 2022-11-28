import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteConformancePackXAmzTargetEnum {
    StarlingDoveServiceDeleteConformancePack = "StarlingDoveService.DeleteConformancePack"
}
export declare class DeleteConformancePackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConformancePackXAmzTargetEnum;
}
export declare class DeleteConformancePackRequest extends SpeakeasyBase {
    headers: DeleteConformancePackHeaders;
    request: shared.DeleteConformancePackRequest;
}
export declare class DeleteConformancePackResponse extends SpeakeasyBase {
    contentType: string;
    noSuchConformancePackException?: any;
    resourceInUseException?: any;
    statusCode: number;
}
