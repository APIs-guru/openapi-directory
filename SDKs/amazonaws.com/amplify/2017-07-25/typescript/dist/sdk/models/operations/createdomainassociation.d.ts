import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDomainAssociationPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class CreateDomainAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDomainAssociationRequestBody extends SpeakeasyBase {
    autoSubDomainCreationPatterns?: string[];
    autoSubDomainIamRole?: string;
    domainName: string;
    enableAutoSubDomain?: boolean;
    subDomainSettings: shared.SubDomainSetting[];
}
export declare class CreateDomainAssociationRequest extends SpeakeasyBase {
    pathParams: CreateDomainAssociationPathParams;
    headers: CreateDomainAssociationHeaders;
    request: CreateDomainAssociationRequestBody;
}
export declare class CreateDomainAssociationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createDomainAssociationResult?: shared.CreateDomainAssociationResult;
    dependentServiceFailureException?: any;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
