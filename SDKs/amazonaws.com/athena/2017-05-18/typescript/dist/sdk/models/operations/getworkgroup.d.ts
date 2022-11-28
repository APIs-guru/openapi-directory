import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetWorkGroupXAmzTargetEnum {
    AmazonAthenaGetWorkGroup = "AmazonAthena.GetWorkGroup"
}
export declare class GetWorkGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetWorkGroupXAmzTargetEnum;
}
export declare class GetWorkGroupRequest extends SpeakeasyBase {
    headers: GetWorkGroupHeaders;
    request: shared.GetWorkGroupInput;
}
export declare class GetWorkGroupResponse extends SpeakeasyBase {
    contentType: string;
    getWorkGroupOutput?: shared.GetWorkGroupOutput;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
