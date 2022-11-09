import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DisassociateMembershipHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateMembershipRequestBody extends SpeakeasyBase {
    graphArn: string;
}
export declare class DisassociateMembershipRequest extends SpeakeasyBase {
    headers: DisassociateMembershipHeaders;
    request: DisassociateMembershipRequestBody;
}
export declare class DisassociateMembershipResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
