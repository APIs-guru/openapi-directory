import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeContinuousExportsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeContinuousExportsXAmzTargetEnum {
    AwsPoseidonServiceV20151101DescribeContinuousExports = "AWSPoseidonService_V2015_11_01.DescribeContinuousExports"
}
export declare class DescribeContinuousExportsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeContinuousExportsXAmzTargetEnum;
}
export declare class DescribeContinuousExportsRequest extends SpeakeasyBase {
    queryParams: DescribeContinuousExportsQueryParams;
    headers: DescribeContinuousExportsHeaders;
    request: shared.DescribeContinuousExportsRequest;
}
export declare class DescribeContinuousExportsResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    describeContinuousExportsResponse?: shared.DescribeContinuousExportsResponse;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    operationNotPermittedException?: any;
    resourceNotFoundException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
}
