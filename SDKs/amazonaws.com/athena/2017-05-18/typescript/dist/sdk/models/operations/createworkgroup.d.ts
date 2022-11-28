import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateWorkGroupXAmzTargetEnum {
    AmazonAthenaCreateWorkGroup = "AmazonAthena.CreateWorkGroup"
}
export declare class CreateWorkGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWorkGroupXAmzTargetEnum;
}
export declare class CreateWorkGroupRequest extends SpeakeasyBase {
    headers: CreateWorkGroupHeaders;
    request: shared.CreateWorkGroupInput;
}
export declare class CreateWorkGroupResponse extends SpeakeasyBase {
    contentType: string;
    createWorkGroupOutput?: Map<string, any>;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
