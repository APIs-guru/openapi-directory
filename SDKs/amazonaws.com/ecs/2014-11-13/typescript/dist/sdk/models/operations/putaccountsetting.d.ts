import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutAccountSettingXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113PutAccountSetting = "AmazonEC2ContainerServiceV20141113.PutAccountSetting"
}
export declare class PutAccountSettingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAccountSettingXAmzTargetEnum;
}
export declare class PutAccountSettingRequest extends SpeakeasyBase {
    headers: PutAccountSettingHeaders;
    request: shared.PutAccountSettingRequest;
}
export declare class PutAccountSettingResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    putAccountSettingResponse?: shared.PutAccountSettingResponse;
    serverException?: any;
    statusCode: number;
}
