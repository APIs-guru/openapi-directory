import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteMembersRequestBody extends SpeakeasyBase {
    accountIds: string[];
    graphArn: string;
}
export declare class DeleteMembersRequest extends SpeakeasyBase {
    headers: DeleteMembersHeaders;
    request: DeleteMembersRequestBody;
}
export declare class DeleteMembersResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    deleteMembersResponse?: shared.DeleteMembersResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
