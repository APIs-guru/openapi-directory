import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopBgpFailoverTestXAmzTargetEnum {
    OvertureServiceStopBgpFailoverTest = "OvertureService.StopBgpFailoverTest"
}
export declare class StopBgpFailoverTestHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopBgpFailoverTestXAmzTargetEnum;
}
export declare class StopBgpFailoverTestRequest extends SpeakeasyBase {
    headers: StopBgpFailoverTestHeaders;
    request: shared.StopBgpFailoverTestRequest;
}
export declare class StopBgpFailoverTestResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
    stopBgpFailoverTestResponse?: shared.StopBgpFailoverTestResponse;
}
