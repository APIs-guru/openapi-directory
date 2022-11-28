import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListBackupsXAmzTargetEnum {
    DynamoDb20120810ListBackups = "DynamoDB_20120810.ListBackups"
}
export declare class ListBackupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBackupsXAmzTargetEnum;
}
export declare class ListBackupsRequest extends SpeakeasyBase {
    headers: ListBackupsHeaders;
    request: shared.ListBackupsInput;
}
export declare class ListBackupsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    listBackupsOutput?: shared.ListBackupsOutput;
    statusCode: number;
}
