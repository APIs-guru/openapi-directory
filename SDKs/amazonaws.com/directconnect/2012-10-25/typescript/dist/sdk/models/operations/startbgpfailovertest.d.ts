import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartBgpFailoverTestXAmzTargetEnum {
    OvertureServiceStartBgpFailoverTest = "OvertureService.StartBgpFailoverTest"
}
export declare class StartBgpFailoverTestHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartBgpFailoverTestXAmzTargetEnum;
}
export declare class StartBgpFailoverTestRequest extends SpeakeasyBase {
    headers: StartBgpFailoverTestHeaders;
    request: shared.StartBgpFailoverTestRequest;
}
export declare class StartBgpFailoverTestResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    startBgpFailoverTestResponse?: shared.StartBgpFailoverTestResponse;
    statusCode: number;
}
