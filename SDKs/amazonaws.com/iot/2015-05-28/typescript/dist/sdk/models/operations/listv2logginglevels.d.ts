import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListV2LoggingLevelsTargetTypeEnum {
    Default = "DEFAULT",
    ThingGroup = "THING_GROUP"
}
export declare class ListV2LoggingLevelsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    targetType?: ListV2LoggingLevelsTargetTypeEnum;
}
export declare class ListV2LoggingLevelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListV2LoggingLevelsRequest extends SpeakeasyBase {
    queryParams: ListV2LoggingLevelsQueryParams;
    headers: ListV2LoggingLevelsHeaders;
}
export declare class ListV2LoggingLevelsResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    listV2LoggingLevelsResponse?: shared.ListV2LoggingLevelsResponse;
    notConfiguredException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
