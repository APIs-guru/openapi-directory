import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateConditionalForwarderXAmzTargetEnum {
    DirectoryService20150416UpdateConditionalForwarder = "DirectoryService_20150416.UpdateConditionalForwarder"
}
export declare class UpdateConditionalForwarderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateConditionalForwarderXAmzTargetEnum;
}
export declare class UpdateConditionalForwarderRequest extends SpeakeasyBase {
    headers: UpdateConditionalForwarderHeaders;
    request: shared.UpdateConditionalForwarderRequest;
}
export declare class UpdateConditionalForwarderResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    directoryUnavailableException?: any;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
    updateConditionalForwarderResult?: Map<string, any>;
}
