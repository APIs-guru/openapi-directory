import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AssociateCustomDomainXAmzTargetEnum {
    AppRunnerAssociateCustomDomain = "AppRunner.AssociateCustomDomain"
}
export declare class AssociateCustomDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateCustomDomainXAmzTargetEnum;
}
export declare class AssociateCustomDomainRequest extends SpeakeasyBase {
    headers: AssociateCustomDomainHeaders;
    request: shared.AssociateCustomDomainRequest;
}
export declare class AssociateCustomDomainResponse extends SpeakeasyBase {
    associateCustomDomainResponse?: shared.AssociateCustomDomainResponse;
    contentType: string;
    internalServiceErrorException?: any;
    invalidRequestException?: any;
    invalidStateException?: any;
    statusCode: number;
}
