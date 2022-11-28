import { SpeakeasyBase } from "../../../internal/utils";
import { AwsJobExecutionsRolloutConfig } from "./awsjobexecutionsrolloutconfig";
import { AwsJobPresignedUrlConfig } from "./awsjobpresignedurlconfig";
import { ErrorInfo } from "./errorinfo";
import { OtaUpdateFile } from "./otaupdatefile";
import { OtaUpdateStatusEnum } from "./otaupdatestatusenum";
import { ProtocolEnum } from "./protocolenum";
import { TargetSelectionEnum } from "./targetselectionenum";
/**
 * Information about an OTA update.
**/
export declare class OtaUpdateInfo extends SpeakeasyBase {
    additionalParameters?: Map<string, string>;
    awsIotJobArn?: string;
    awsIotJobId?: string;
    awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;
    awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;
    creationDate?: Date;
    description?: string;
    errorInfo?: ErrorInfo;
    lastModifiedDate?: Date;
    otaUpdateArn?: string;
    otaUpdateFiles?: OtaUpdateFile[];
    otaUpdateId?: string;
    otaUpdateStatus?: OtaUpdateStatusEnum;
    protocols?: ProtocolEnum[];
    targetSelection?: TargetSelectionEnum;
    targets?: string[];
}
