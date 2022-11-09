import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ConnectDirectoryXAmzTargetEnum {
    DirectoryService20150416ConnectDirectory = "DirectoryService_20150416.ConnectDirectory"
}
export declare class ConnectDirectoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConnectDirectoryXAmzTargetEnum;
}
export declare class ConnectDirectoryRequest extends SpeakeasyBase {
    headers: ConnectDirectoryHeaders;
    request: shared.ConnectDirectoryRequest;
}
export declare class ConnectDirectoryResponse extends SpeakeasyBase {
    clientException?: any;
    connectDirectoryResult?: shared.ConnectDirectoryResult;
    contentType: string;
    directoryLimitExceededException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
}
