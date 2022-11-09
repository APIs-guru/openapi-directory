import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateCertificateFromCsrResponse
/** 
 * The output from the CreateCertificateFromCsr operation.
**/
export class CreateCertificateFromCsrResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @Metadata({ data: "json, name=certificatePem" })
  certificatePem?: string;
}
