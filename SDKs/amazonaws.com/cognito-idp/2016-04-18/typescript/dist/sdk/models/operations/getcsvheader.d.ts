import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCsvHeaderXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceGetCsvHeader = "AWSCognitoIdentityProviderService.GetCSVHeader"
}
export declare class GetCsvHeaderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCsvHeaderXAmzTargetEnum;
}
export declare class GetCsvHeaderRequest extends SpeakeasyBase {
    headers: GetCsvHeaderHeaders;
    request: shared.GetCsvHeaderRequest;
}
export declare class GetCsvHeaderResponse extends SpeakeasyBase {
    contentType: string;
    getCsvHeaderResponse?: shared.GetCsvHeaderResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
