import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DisableSsoXAmzTargetEnum {
    DirectoryService20150416DisableSso = "DirectoryService_20150416.DisableSso"
}
export declare class DisableSsoHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableSsoXAmzTargetEnum;
}
export declare class DisableSsoRequest extends SpeakeasyBase {
    headers: DisableSsoHeaders;
    request: shared.DisableSsoRequest;
}
export declare class DisableSsoResponse extends SpeakeasyBase {
    authenticationFailedException?: any;
    clientException?: any;
    contentType: string;
    disableSsoResult?: Map<string, any>;
    entityDoesNotExistException?: any;
    insufficientPermissionsException?: any;
    serviceException?: any;
    statusCode: number;
}
