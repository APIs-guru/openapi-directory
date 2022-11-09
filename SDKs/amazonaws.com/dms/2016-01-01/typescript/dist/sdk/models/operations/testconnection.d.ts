import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum TestConnectionXAmzTargetEnum {
    AmazonDmSv20160101TestConnection = "AmazonDMSv20160101.TestConnection"
}
export declare class TestConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TestConnectionXAmzTargetEnum;
}
export declare class TestConnectionRequest extends SpeakeasyBase {
    headers: TestConnectionHeaders;
    request: shared.TestConnectionMessage;
}
export declare class TestConnectionResponse extends SpeakeasyBase {
    accessDeniedFault?: any;
    contentType: string;
    invalidResourceStateFault?: any;
    kmsKeyNotAccessibleFault?: any;
    resourceNotFoundFault?: any;
    resourceQuotaExceededFault?: any;
    statusCode: number;
    testConnectionResponse?: shared.TestConnectionResponse;
}
