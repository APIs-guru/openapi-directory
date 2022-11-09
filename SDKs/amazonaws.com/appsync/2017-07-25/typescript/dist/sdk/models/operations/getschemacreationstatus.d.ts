import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSchemaCreationStatusPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class GetSchemaCreationStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSchemaCreationStatusRequest extends SpeakeasyBase {
    pathParams: GetSchemaCreationStatusPathParams;
    headers: GetSchemaCreationStatusHeaders;
}
export declare class GetSchemaCreationStatusResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getSchemaCreationStatusResponse?: shared.GetSchemaCreationStatusResponse;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
