import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListUploadsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListUploadsXAmzTargetEnum {
    DeviceFarm20150623ListUploads = "DeviceFarm_20150623.ListUploads"
}
export declare class ListUploadsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListUploadsXAmzTargetEnum;
}
export declare class ListUploadsRequest extends SpeakeasyBase {
    queryParams: ListUploadsQueryParams;
    headers: ListUploadsHeaders;
    request: shared.ListUploadsRequest;
}
export declare class ListUploadsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listUploadsResult?: shared.ListUploadsResult;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
