import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeConfigurationRecordersXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigurationRecorders = "StarlingDoveService.DescribeConfigurationRecorders"
}
export declare class DescribeConfigurationRecordersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConfigurationRecordersXAmzTargetEnum;
}
export declare class DescribeConfigurationRecordersRequest extends SpeakeasyBase {
    headers: DescribeConfigurationRecordersHeaders;
    request: shared.DescribeConfigurationRecordersRequest;
}
export declare class DescribeConfigurationRecordersResponse extends SpeakeasyBase {
    contentType: string;
    describeConfigurationRecordersResponse?: shared.DescribeConfigurationRecordersResponse;
    noSuchConfigurationRecorderException?: any;
    statusCode: number;
}
