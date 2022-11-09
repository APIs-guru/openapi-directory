import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ContainsPiiEntitiesXAmzTargetEnum {
    Comprehend20171127ContainsPiiEntities = "Comprehend_20171127.ContainsPiiEntities"
}
export declare class ContainsPiiEntitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ContainsPiiEntitiesXAmzTargetEnum;
}
export declare class ContainsPiiEntitiesRequest extends SpeakeasyBase {
    headers: ContainsPiiEntitiesHeaders;
    request: shared.ContainsPiiEntitiesRequest;
}
export declare class ContainsPiiEntitiesResponse extends SpeakeasyBase {
    containsPiiEntitiesResponse?: shared.ContainsPiiEntitiesResponse;
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
    unsupportedLanguageException?: any;
}
