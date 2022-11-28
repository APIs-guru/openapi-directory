import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateReportGroupXAmzTargetEnum {
    CodeBuild20161006CreateReportGroup = "CodeBuild_20161006.CreateReportGroup"
}
export declare class CreateReportGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateReportGroupXAmzTargetEnum;
}
export declare class CreateReportGroupRequest extends SpeakeasyBase {
    headers: CreateReportGroupHeaders;
    request: shared.CreateReportGroupInput;
}
export declare class CreateReportGroupResponse extends SpeakeasyBase {
    accountLimitExceededException?: any;
    contentType: string;
    createReportGroupOutput?: shared.CreateReportGroupOutput;
    invalidInputException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
}
