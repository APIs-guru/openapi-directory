import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteWorkGroupXAmzTargetEnum {
    AmazonAthenaDeleteWorkGroup = "AmazonAthena.DeleteWorkGroup"
}
export declare class DeleteWorkGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWorkGroupXAmzTargetEnum;
}
export declare class DeleteWorkGroupRequest extends SpeakeasyBase {
    headers: DeleteWorkGroupHeaders;
    request: shared.DeleteWorkGroupInput;
}
export declare class DeleteWorkGroupResponse extends SpeakeasyBase {
    contentType: string;
    deleteWorkGroupOutput?: Map<string, any>;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
