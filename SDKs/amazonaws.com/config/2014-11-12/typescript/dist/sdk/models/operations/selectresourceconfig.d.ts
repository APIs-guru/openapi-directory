import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SelectResourceConfigQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum SelectResourceConfigXAmzTargetEnum {
    StarlingDoveServiceSelectResourceConfig = "StarlingDoveService.SelectResourceConfig"
}
export declare class SelectResourceConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SelectResourceConfigXAmzTargetEnum;
}
export declare class SelectResourceConfigRequest extends SpeakeasyBase {
    queryParams: SelectResourceConfigQueryParams;
    headers: SelectResourceConfigHeaders;
    request: shared.SelectResourceConfigRequest;
}
export declare class SelectResourceConfigResponse extends SpeakeasyBase {
    contentType: string;
    invalidExpressionException?: any;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    selectResourceConfigResponse?: shared.SelectResourceConfigResponse;
    statusCode: number;
}
