import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AssociateServiceRoleToAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateServiceRoleToAccountRequestBody extends SpeakeasyBase {
    roleArn: string;
}
export declare class AssociateServiceRoleToAccountRequest extends SpeakeasyBase {
    headers: AssociateServiceRoleToAccountHeaders;
    request: AssociateServiceRoleToAccountRequestBody;
}
export declare class AssociateServiceRoleToAccountResponse extends SpeakeasyBase {
    associateServiceRoleToAccountResponse?: shared.AssociateServiceRoleToAccountResponse;
    badRequestException?: any;
    contentType: string;
    internalServerErrorException?: any;
    statusCode: number;
}
