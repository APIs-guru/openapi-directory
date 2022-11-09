import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeEndpointSettingsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeEndpointSettingsXAmzTargetEnum {
    AmazonDmSv20160101DescribeEndpointSettings = "AmazonDMSv20160101.DescribeEndpointSettings"
}
export declare class DescribeEndpointSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEndpointSettingsXAmzTargetEnum;
}
export declare class DescribeEndpointSettingsRequest extends SpeakeasyBase {
    queryParams: DescribeEndpointSettingsQueryParams;
    headers: DescribeEndpointSettingsHeaders;
    request: shared.DescribeEndpointSettingsMessage;
}
export declare class DescribeEndpointSettingsResponse extends SpeakeasyBase {
    contentType: string;
    describeEndpointSettingsResponse?: shared.DescribeEndpointSettingsResponse;
    statusCode: number;
}
