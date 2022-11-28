import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutAccountSettingDefaultXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113PutAccountSettingDefault = "AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault"
}
export declare class PutAccountSettingDefaultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAccountSettingDefaultXAmzTargetEnum;
}
export declare class PutAccountSettingDefaultRequest extends SpeakeasyBase {
    headers: PutAccountSettingDefaultHeaders;
    request: shared.PutAccountSettingDefaultRequest;
}
export declare class PutAccountSettingDefaultResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    putAccountSettingDefaultResponse?: shared.PutAccountSettingDefaultResponse;
    serverException?: any;
    statusCode: number;
}
