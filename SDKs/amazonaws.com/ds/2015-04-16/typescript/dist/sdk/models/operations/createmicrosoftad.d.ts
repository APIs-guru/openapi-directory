import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateMicrosoftAdxAmzTargetEnum {
    DirectoryService20150416CreateMicrosoftAd = "DirectoryService_20150416.CreateMicrosoftAD"
}
export declare class CreateMicrosoftAdHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMicrosoftAdxAmzTargetEnum;
}
export declare class CreateMicrosoftAdRequest extends SpeakeasyBase {
    headers: CreateMicrosoftAdHeaders;
    request: shared.CreateMicrosoftAdRequest;
}
export declare class CreateMicrosoftAdResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    createMicrosoftAdResult?: shared.CreateMicrosoftAdResult;
    directoryLimitExceededException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
