import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteLocationXAmzTargetEnum {
    FmrsServiceDeleteLocation = "FmrsService.DeleteLocation"
}
export declare class DeleteLocationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLocationXAmzTargetEnum;
}
export declare class DeleteLocationRequest extends SpeakeasyBase {
    headers: DeleteLocationHeaders;
    request: shared.DeleteLocationRequest;
}
export declare class DeleteLocationResponse extends SpeakeasyBase {
    contentType: string;
    deleteLocationResponse?: Map<string, any>;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
