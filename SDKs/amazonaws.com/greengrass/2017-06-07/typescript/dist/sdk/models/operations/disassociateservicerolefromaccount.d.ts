import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisassociateServiceRoleFromAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateServiceRoleFromAccountRequest extends SpeakeasyBase {
    headers: DisassociateServiceRoleFromAccountHeaders;
}
export declare class DisassociateServiceRoleFromAccountResponse extends SpeakeasyBase {
    contentType: string;
    disassociateServiceRoleFromAccountResponse?: shared.DisassociateServiceRoleFromAccountResponse;
    internalServerErrorException?: any;
    statusCode: number;
}
