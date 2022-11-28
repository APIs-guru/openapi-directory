import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAccountSettingXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeleteAccountSetting = "AmazonEC2ContainerServiceV20141113.DeleteAccountSetting"
}
export declare class DeleteAccountSettingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAccountSettingXAmzTargetEnum;
}
export declare class DeleteAccountSettingRequest extends SpeakeasyBase {
    headers: DeleteAccountSettingHeaders;
    request: shared.DeleteAccountSettingRequest;
}
export declare class DeleteAccountSettingResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    deleteAccountSettingResponse?: shared.DeleteAccountSettingResponse;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
}
