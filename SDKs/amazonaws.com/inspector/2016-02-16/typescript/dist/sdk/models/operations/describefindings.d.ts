import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeFindingsXAmzTargetEnum {
    InspectorServiceDescribeFindings = "InspectorService.DescribeFindings"
}
export declare class DescribeFindingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFindingsXAmzTargetEnum;
}
export declare class DescribeFindingsRequest extends SpeakeasyBase {
    headers: DescribeFindingsHeaders;
    request: shared.DescribeFindingsRequest;
}
export declare class DescribeFindingsResponse extends SpeakeasyBase {
    contentType: string;
    describeFindingsResponse?: shared.DescribeFindingsResponse;
    internalException?: any;
    invalidInputException?: any;
    statusCode: number;
}
