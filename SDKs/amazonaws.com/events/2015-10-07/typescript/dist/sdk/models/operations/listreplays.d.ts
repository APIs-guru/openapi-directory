import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListReplaysXAmzTargetEnum {
    AwsEventsListReplays = "AWSEvents.ListReplays"
}
export declare class ListReplaysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListReplaysXAmzTargetEnum;
}
export declare class ListReplaysRequest extends SpeakeasyBase {
    headers: ListReplaysHeaders;
    request: shared.ListReplaysRequest;
}
export declare class ListReplaysResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    listReplaysResponse?: shared.ListReplaysResponse;
    statusCode: number;
}
