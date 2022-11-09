import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DisassociateRepositoryPathParams extends SpeakeasyBase {
    associationArn: string;
}
export declare class DisassociateRepositoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateRepositoryRequest extends SpeakeasyBase {
    pathParams: DisassociateRepositoryPathParams;
    headers: DisassociateRepositoryHeaders;
}
export declare class DisassociateRepositoryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    disassociateRepositoryResponse?: shared.DisassociateRepositoryResponse;
    internalServerException?: any;
    notFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
