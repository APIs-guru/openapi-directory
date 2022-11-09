import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ReserveContactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ReserveContactRequestBody extends SpeakeasyBase {
    endTime: Date;
    groundStation: string;
    missionProfileArn: string;
    satelliteArn: string;
    startTime: Date;
    tags?: Map<string, string>;
}
export declare class ReserveContactRequest extends SpeakeasyBase {
    headers: ReserveContactHeaders;
    request: ReserveContactRequestBody;
}
export declare class ReserveContactResponse extends SpeakeasyBase {
    contactIdResponse?: shared.ContactIdResponse;
    contentType: string;
    dependencyException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
