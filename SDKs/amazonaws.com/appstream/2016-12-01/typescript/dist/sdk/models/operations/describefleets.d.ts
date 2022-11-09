import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeFleetsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeFleets = "PhotonAdminProxyService.DescribeFleets"
}
export declare class DescribeFleetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFleetsXAmzTargetEnum;
}
export declare class DescribeFleetsRequest extends SpeakeasyBase {
    headers: DescribeFleetsHeaders;
    request: shared.DescribeFleetsRequest;
}
export declare class DescribeFleetsResponse extends SpeakeasyBase {
    contentType: string;
    describeFleetsResult?: shared.DescribeFleetsResult;
    resourceNotFoundException?: any;
    statusCode: number;
}
