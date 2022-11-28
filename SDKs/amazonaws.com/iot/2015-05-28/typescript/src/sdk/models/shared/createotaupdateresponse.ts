import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OtaUpdateStatusEnum } from "./otaupdatestatusenum";



export class CreateOtaUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsIotJobArn" })
  awsIotJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=awsIotJobId" })
  awsIotJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=otaUpdateArn" })
  otaUpdateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=otaUpdateId" })
  otaUpdateId?: string;

  @SpeakeasyMetadata({ data: "json, name=otaUpdateStatus" })
  otaUpdateStatus?: OtaUpdateStatusEnum;
}
