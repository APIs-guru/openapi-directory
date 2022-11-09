import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDomainAssociationPathParams extends SpeakeasyBase {
    appId: string;
    domainName: string;
}
export declare class GetDomainAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDomainAssociationRequest extends SpeakeasyBase {
    pathParams: GetDomainAssociationPathParams;
    headers: GetDomainAssociationHeaders;
}
export declare class GetDomainAssociationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getDomainAssociationResult?: shared.GetDomainAssociationResult;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
