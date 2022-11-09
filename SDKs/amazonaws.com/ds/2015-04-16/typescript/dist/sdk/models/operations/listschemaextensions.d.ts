import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListSchemaExtensionsXAmzTargetEnum {
    DirectoryService20150416ListSchemaExtensions = "DirectoryService_20150416.ListSchemaExtensions"
}
export declare class ListSchemaExtensionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSchemaExtensionsXAmzTargetEnum;
}
export declare class ListSchemaExtensionsRequest extends SpeakeasyBase {
    headers: ListSchemaExtensionsHeaders;
    request: shared.ListSchemaExtensionsRequest;
}
export declare class ListSchemaExtensionsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    entityDoesNotExistException?: any;
    invalidNextTokenException?: any;
    listSchemaExtensionsResult?: shared.ListSchemaExtensionsResult;
    serviceException?: any;
    statusCode: number;
}
