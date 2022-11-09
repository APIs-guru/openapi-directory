import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DisassociateCustomDomainXAmzTargetEnum {
    AppRunnerDisassociateCustomDomain = "AppRunner.DisassociateCustomDomain"
}
export declare class DisassociateCustomDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateCustomDomainXAmzTargetEnum;
}
export declare class DisassociateCustomDomainRequest extends SpeakeasyBase {
    headers: DisassociateCustomDomainHeaders;
    request: shared.DisassociateCustomDomainRequest;
}
export declare class DisassociateCustomDomainResponse extends SpeakeasyBase {
    contentType: string;
    disassociateCustomDomainResponse?: shared.DisassociateCustomDomainResponse;
    internalServiceErrorException?: any;
    invalidRequestException?: any;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
