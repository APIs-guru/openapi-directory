import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDomainAssociationPathParams extends SpeakeasyBase {
    appId: string;
    domainName: string;
}
export declare class DeleteDomainAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDomainAssociationRequest extends SpeakeasyBase {
    pathParams: DeleteDomainAssociationPathParams;
    headers: DeleteDomainAssociationHeaders;
}
export declare class DeleteDomainAssociationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteDomainAssociationResult?: shared.DeleteDomainAssociationResult;
    dependentServiceFailureException?: any;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
