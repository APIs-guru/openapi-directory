import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateWorkGroupXAmzTargetEnum {
    AmazonAthenaUpdateWorkGroup = "AmazonAthena.UpdateWorkGroup"
}
export declare class UpdateWorkGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateWorkGroupXAmzTargetEnum;
}
export declare class UpdateWorkGroupRequest extends SpeakeasyBase {
    headers: UpdateWorkGroupHeaders;
    request: shared.UpdateWorkGroupInput;
}
export declare class UpdateWorkGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
    updateWorkGroupOutput?: Map<string, any>;
}
