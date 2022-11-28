import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsJobExecutionsRolloutConfig } from "./awsjobexecutionsrolloutconfig";
import { AwsJobPresignedUrlConfig } from "./awsjobpresignedurlconfig";
import { ErrorInfo } from "./errorinfo";
import { OtaUpdateFile } from "./otaupdatefile";
import { OtaUpdateStatusEnum } from "./otaupdatestatusenum";
import { ProtocolEnum } from "./protocolenum";
import { TargetSelectionEnum } from "./targetselectionenum";



// OtaUpdateInfo
/** 
 * Information about an OTA update.
**/
export class OtaUpdateInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalParameters" })
  additionalParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=awsIotJobArn" })
  awsIotJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=awsIotJobId" })
  awsIotJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=awsJobExecutionsRolloutConfig" })
  awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;

  @SpeakeasyMetadata({ data: "json, name=awsJobPresignedUrlConfig" })
  awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=errorInfo" })
  errorInfo?: ErrorInfo;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=otaUpdateArn" })
  otaUpdateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=otaUpdateFiles", elemType: OtaUpdateFile })
  otaUpdateFiles?: OtaUpdateFile[];

  @SpeakeasyMetadata({ data: "json, name=otaUpdateId" })
  otaUpdateId?: string;

  @SpeakeasyMetadata({ data: "json, name=otaUpdateStatus" })
  otaUpdateStatus?: OtaUpdateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=protocols" })
  protocols?: ProtocolEnum[];

  @SpeakeasyMetadata({ data: "json, name=targetSelection" })
  targetSelection?: TargetSelectionEnum;

  @SpeakeasyMetadata({ data: "json, name=targets" })
  targets?: string[];
}
