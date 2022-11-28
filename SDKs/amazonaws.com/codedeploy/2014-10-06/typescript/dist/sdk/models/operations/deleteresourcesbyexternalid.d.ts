import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteResourcesByExternalIdXAmzTargetEnum {
    CodeDeploy20141006DeleteResourcesByExternalId = "CodeDeploy_20141006.DeleteResourcesByExternalId"
}
export declare class DeleteResourcesByExternalIdHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourcesByExternalIdXAmzTargetEnum;
}
export declare class DeleteResourcesByExternalIdRequest extends SpeakeasyBase {
    headers: DeleteResourcesByExternalIdHeaders;
    request: shared.DeleteResourcesByExternalIdInput;
}
export declare class DeleteResourcesByExternalIdResponse extends SpeakeasyBase {
    contentType: string;
    deleteResourcesByExternalIdOutput?: Map<string, any>;
    statusCode: number;
}
