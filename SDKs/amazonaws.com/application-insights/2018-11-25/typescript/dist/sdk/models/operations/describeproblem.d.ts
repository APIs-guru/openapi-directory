import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeProblemXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeProblem = "EC2WindowsBarleyService.DescribeProblem"
}
export declare class DescribeProblemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProblemXAmzTargetEnum;
}
export declare class DescribeProblemRequest extends SpeakeasyBase {
    headers: DescribeProblemHeaders;
    request: shared.DescribeProblemRequest;
}
export declare class DescribeProblemResponse extends SpeakeasyBase {
    contentType: string;
    describeProblemResponse?: shared.DescribeProblemResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
