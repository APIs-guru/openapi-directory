import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeProblemObservationsXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeProblemObservations = "EC2WindowsBarleyService.DescribeProblemObservations"
}
export declare class DescribeProblemObservationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProblemObservationsXAmzTargetEnum;
}
export declare class DescribeProblemObservationsRequest extends SpeakeasyBase {
    headers: DescribeProblemObservationsHeaders;
    request: shared.DescribeProblemObservationsRequest;
}
export declare class DescribeProblemObservationsResponse extends SpeakeasyBase {
    contentType: string;
    describeProblemObservationsResponse?: shared.DescribeProblemObservationsResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
