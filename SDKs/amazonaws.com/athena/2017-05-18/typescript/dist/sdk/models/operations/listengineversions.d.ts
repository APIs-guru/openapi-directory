import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListEngineVersionsXAmzTargetEnum {
    AmazonAthenaListEngineVersions = "AmazonAthena.ListEngineVersions"
}
export declare class ListEngineVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEngineVersionsXAmzTargetEnum;
}
export declare class ListEngineVersionsRequest extends SpeakeasyBase {
    headers: ListEngineVersionsHeaders;
    request: shared.ListEngineVersionsInput;
}
export declare class ListEngineVersionsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listEngineVersionsOutput?: shared.ListEngineVersionsOutput;
    statusCode: number;
}
