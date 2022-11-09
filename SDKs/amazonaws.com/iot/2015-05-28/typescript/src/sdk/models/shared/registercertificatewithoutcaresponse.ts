import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterCertificateWithoutCaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=certificateId" })
  certificateId?: string;
}
