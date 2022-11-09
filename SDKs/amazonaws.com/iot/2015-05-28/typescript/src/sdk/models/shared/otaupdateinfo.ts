import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=additionalParameters" })
  additionalParameters?: Map<string, string>;

  @Metadata({ data: "json, name=awsIotJobArn" })
  awsIotJobArn?: string;

  @Metadata({ data: "json, name=awsIotJobId" })
  awsIotJobId?: string;

  @Metadata({ data: "json, name=awsJobExecutionsRolloutConfig" })
  awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;

  @Metadata({ data: "json, name=awsJobPresignedUrlConfig" })
  awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=errorInfo" })
  errorInfo?: ErrorInfo;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=otaUpdateArn" })
  otaUpdateArn?: string;

  @Metadata({ data: "json, name=otaUpdateFiles", elemType: shared.OtaUpdateFile })
  otaUpdateFiles?: OtaUpdateFile[];

  @Metadata({ data: "json, name=otaUpdateId" })
  otaUpdateId?: string;

  @Metadata({ data: "json, name=otaUpdateStatus" })
  otaUpdateStatus?: OtaUpdateStatusEnum;

  @Metadata({ data: "json, name=protocols" })
  protocols?: ProtocolEnum[];

  @Metadata({ data: "json, name=targetSelection" })
  targetSelection?: TargetSelectionEnum;

  @Metadata({ data: "json, name=targets" })
  targets?: string[];
}
