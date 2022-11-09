import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeDomainControllersQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeDomainControllersXAmzTargetEnum {
    DirectoryService20150416DescribeDomainControllers = "DirectoryService_20150416.DescribeDomainControllers"
}
export declare class DescribeDomainControllersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDomainControllersXAmzTargetEnum;
}
export declare class DescribeDomainControllersRequest extends SpeakeasyBase {
    queryParams: DescribeDomainControllersQueryParams;
    headers: DescribeDomainControllersHeaders;
    request: shared.DescribeDomainControllersRequest;
}
export declare class DescribeDomainControllersResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeDomainControllersResult?: shared.DescribeDomainControllersResult;
    entityDoesNotExistException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
