import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartSchemaCreationPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class StartSchemaCreationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartSchemaCreationRequestBody extends SpeakeasyBase {
    definition: string;
}
export declare class StartSchemaCreationRequest extends SpeakeasyBase {
    pathParams: StartSchemaCreationPathParams;
    headers: StartSchemaCreationHeaders;
    request: StartSchemaCreationRequestBody;
}
export declare class StartSchemaCreationResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    internalFailureException?: any;
    notFoundException?: any;
    startSchemaCreationResponse?: shared.StartSchemaCreationResponse;
    statusCode: number;
    unauthorizedException?: any;
}
