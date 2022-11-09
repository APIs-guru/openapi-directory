import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetComponentPathParams extends SpeakeasyBase {
    arn: string;
}
export declare enum GetComponentRecipeOutputFormatEnum {
    Json = "JSON",
    Yaml = "YAML"
}
export declare class GetComponentQueryParams extends SpeakeasyBase {
    recipeOutputFormat?: GetComponentRecipeOutputFormatEnum;
}
export declare class GetComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetComponentRequest extends SpeakeasyBase {
    pathParams: GetComponentPathParams;
    queryParams: GetComponentQueryParams;
    headers: GetComponentHeaders;
}
export declare class GetComponentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getComponentResponse?: shared.GetComponentResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
