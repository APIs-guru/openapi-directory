import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDomainAssociationPathParams extends SpeakeasyBase {
    appId: string;
    domainName: string;
}
export declare class UpdateDomainAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDomainAssociationRequestBody extends SpeakeasyBase {
    autoSubDomainCreationPatterns?: string[];
    autoSubDomainIamRole?: string;
    enableAutoSubDomain?: boolean;
    subDomainSettings: shared.SubDomainSetting[];
}
export declare class UpdateDomainAssociationRequest extends SpeakeasyBase {
    pathParams: UpdateDomainAssociationPathParams;
    headers: UpdateDomainAssociationHeaders;
    request: UpdateDomainAssociationRequestBody;
}
export declare class UpdateDomainAssociationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    dependentServiceFailureException?: any;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateDomainAssociationResult?: shared.UpdateDomainAssociationResult;
}
