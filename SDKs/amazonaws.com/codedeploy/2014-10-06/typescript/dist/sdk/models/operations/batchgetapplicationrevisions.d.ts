import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetApplicationRevisionsXAmzTargetEnum {
    CodeDeploy20141006BatchGetApplicationRevisions = "CodeDeploy_20141006.BatchGetApplicationRevisions"
}
export declare class BatchGetApplicationRevisionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetApplicationRevisionsXAmzTargetEnum;
}
export declare class BatchGetApplicationRevisionsRequest extends SpeakeasyBase {
    headers: BatchGetApplicationRevisionsHeaders;
    request: shared.BatchGetApplicationRevisionsInput;
}
export declare class BatchGetApplicationRevisionsResponse extends SpeakeasyBase {
    applicationDoesNotExistException?: any;
    applicationNameRequiredException?: any;
    batchGetApplicationRevisionsOutput?: shared.BatchGetApplicationRevisionsOutput;
    batchLimitExceededException?: any;
    contentType: string;
    invalidApplicationNameException?: any;
    invalidRevisionException?: any;
    revisionRequiredException?: any;
    statusCode: number;
}
