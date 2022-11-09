import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateMembersRequestBody extends SpeakeasyBase {
    accounts: shared.Account[];
    disableEmailNotification?: boolean;
    graphArn: string;
    message?: string;
}
export declare class CreateMembersRequest extends SpeakeasyBase {
    headers: CreateMembersHeaders;
    request: CreateMembersRequestBody;
}
export declare class CreateMembersResponse extends SpeakeasyBase {
    contentType: string;
    createMembersResponse?: shared.CreateMembersResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    validationException?: any;
}
