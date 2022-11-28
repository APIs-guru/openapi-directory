import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EnableSsoXAmzTargetEnum {
    DirectoryService20150416EnableSso = "DirectoryService_20150416.EnableSso"
}
export declare class EnableSsoHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableSsoXAmzTargetEnum;
}
export declare class EnableSsoRequest extends SpeakeasyBase {
    headers: EnableSsoHeaders;
    request: shared.EnableSsoRequest;
}
export declare class EnableSsoResponse extends SpeakeasyBase {
    authenticationFailedException?: any;
    clientException?: any;
    contentType: string;
    enableSsoResult?: Map<string, any>;
    entityDoesNotExistException?: any;
    insufficientPermissionsException?: any;
    serviceException?: any;
    statusCode: number;
}
