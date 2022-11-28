import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeVaultPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class DescribeVaultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeVaultRequest extends SpeakeasyBase {
    pathParams: DescribeVaultPathParams;
    headers: DescribeVaultHeaders;
}
export declare class DescribeVaultResponse extends SpeakeasyBase {
    contentType: string;
    describeVaultOutput?: shared.DescribeVaultOutput;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
