import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteNamedQueryXAmzTargetEnum {
    AmazonAthenaDeleteNamedQuery = "AmazonAthena.DeleteNamedQuery"
}
export declare class DeleteNamedQueryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteNamedQueryXAmzTargetEnum;
}
export declare class DeleteNamedQueryRequest extends SpeakeasyBase {
    headers: DeleteNamedQueryHeaders;
    request: shared.DeleteNamedQueryInput;
}
export declare class DeleteNamedQueryResponse extends SpeakeasyBase {
    contentType: string;
    deleteNamedQueryOutput?: Map<string, any>;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
