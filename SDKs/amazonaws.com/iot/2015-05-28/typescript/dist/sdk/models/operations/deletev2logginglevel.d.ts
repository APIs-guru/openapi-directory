import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeleteV2LoggingLevelTargetTypeEnum {
    Default = "DEFAULT",
    ThingGroup = "THING_GROUP"
}
export declare class DeleteV2LoggingLevelQueryParams extends SpeakeasyBase {
    targetName: string;
    targetType: DeleteV2LoggingLevelTargetTypeEnum;
}
export declare class DeleteV2LoggingLevelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteV2LoggingLevelRequest extends SpeakeasyBase {
    queryParams: DeleteV2LoggingLevelQueryParams;
    headers: DeleteV2LoggingLevelHeaders;
}
export declare class DeleteV2LoggingLevelResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
