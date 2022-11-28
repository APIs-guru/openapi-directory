import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateNamedQueryXAmzTargetEnum {
    AmazonAthenaCreateNamedQuery = "AmazonAthena.CreateNamedQuery"
}
export declare class CreateNamedQueryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateNamedQueryXAmzTargetEnum;
}
export declare class CreateNamedQueryRequest extends SpeakeasyBase {
    headers: CreateNamedQueryHeaders;
    request: shared.CreateNamedQueryInput;
}
export declare class CreateNamedQueryResponse extends SpeakeasyBase {
    contentType: string;
    createNamedQueryOutput?: shared.CreateNamedQueryOutput;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
