import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum TestEventPatternXAmzTargetEnum {
    AwsEventsTestEventPattern = "AWSEvents.TestEventPattern"
}
export declare class TestEventPatternHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TestEventPatternXAmzTargetEnum;
}
export declare class TestEventPatternRequest extends SpeakeasyBase {
    headers: TestEventPatternHeaders;
    request: shared.TestEventPatternRequest;
}
export declare class TestEventPatternResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidEventPatternException?: any;
    statusCode: number;
    testEventPatternResponse?: shared.TestEventPatternResponse;
}
