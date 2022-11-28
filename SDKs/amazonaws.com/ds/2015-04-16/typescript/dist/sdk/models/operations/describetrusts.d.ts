import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTrustsXAmzTargetEnum {
    DirectoryService20150416DescribeTrusts = "DirectoryService_20150416.DescribeTrusts"
}
export declare class DescribeTrustsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTrustsXAmzTargetEnum;
}
export declare class DescribeTrustsRequest extends SpeakeasyBase {
    headers: DescribeTrustsHeaders;
    request: shared.DescribeTrustsRequest;
}
export declare class DescribeTrustsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeTrustsResult?: shared.DescribeTrustsResult;
    entityDoesNotExistException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
