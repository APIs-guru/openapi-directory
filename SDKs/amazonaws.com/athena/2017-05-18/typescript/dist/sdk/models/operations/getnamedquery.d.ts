import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetNamedQueryXAmzTargetEnum {
    AmazonAthenaGetNamedQuery = "AmazonAthena.GetNamedQuery"
}
export declare class GetNamedQueryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetNamedQueryXAmzTargetEnum;
}
export declare class GetNamedQueryRequest extends SpeakeasyBase {
    headers: GetNamedQueryHeaders;
    request: shared.GetNamedQueryInput;
}
export declare class GetNamedQueryResponse extends SpeakeasyBase {
    contentType: string;
    getNamedQueryOutput?: shared.GetNamedQueryOutput;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
