import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutJobFailureResultXAmzTargetEnum {
    CodePipeline20150709PutJobFailureResult = "CodePipeline_20150709.PutJobFailureResult"
}
export declare class PutJobFailureResultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutJobFailureResultXAmzTargetEnum;
}
export declare class PutJobFailureResultRequest extends SpeakeasyBase {
    headers: PutJobFailureResultHeaders;
    request: shared.PutJobFailureResultInput;
}
export declare class PutJobFailureResultResponse extends SpeakeasyBase {
    contentType: string;
    invalidJobStateException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
