import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterCertificateWithoutCaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateId" })
  certificateId?: string;
}
