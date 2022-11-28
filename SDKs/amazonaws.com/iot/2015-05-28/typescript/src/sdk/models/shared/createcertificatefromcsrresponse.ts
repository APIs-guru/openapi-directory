import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateCertificateFromCsrResponse
/** 
 * The output from the CreateCertificateFromCsr operation.
**/
export class CreateCertificateFromCsrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=certificatePem" })
  certificatePem?: string;
}
