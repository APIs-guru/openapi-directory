import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OtaUpdateStatusEnum } from "./otaupdatestatusenum";


export class CreateOtaUpdateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsIotJobArn" })
  awsIotJobArn?: string;

  @Metadata({ data: "json, name=awsIotJobId" })
  awsIotJobId?: string;

  @Metadata({ data: "json, name=otaUpdateArn" })
  otaUpdateArn?: string;

  @Metadata({ data: "json, name=otaUpdateId" })
  otaUpdateId?: string;

  @Metadata({ data: "json, name=otaUpdateStatus" })
  otaUpdateStatus?: OtaUpdateStatusEnum;
}
