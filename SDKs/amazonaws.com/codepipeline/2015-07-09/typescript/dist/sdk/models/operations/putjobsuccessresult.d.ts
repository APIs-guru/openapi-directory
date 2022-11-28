import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutJobSuccessResultXAmzTargetEnum {
    CodePipeline20150709PutJobSuccessResult = "CodePipeline_20150709.PutJobSuccessResult"
}
export declare class PutJobSuccessResultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutJobSuccessResultXAmzTargetEnum;
}
export declare class PutJobSuccessResultRequest extends SpeakeasyBase {
    headers: PutJobSuccessResultHeaders;
    request: shared.PutJobSuccessResultInput;
}
export declare class PutJobSuccessResultResponse extends SpeakeasyBase {
    contentType: string;
    invalidJobStateException?: any;
    jobNotFoundException?: any;
    outputVariablesSizeExceededException?: any;
    statusCode: number;
    validationException?: any;
}
