import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";



// SigningCertificate
/** 
 * <p>Contains information about an X.509 signing certificate.</p> <p>This data type is used as a response element in the <a>UploadSigningCertificate</a> and <a>ListSigningCertificates</a> operations. </p>
**/
export class SigningCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateBody: string;

  @SpeakeasyMetadata()
  certificateId: string;

  @SpeakeasyMetadata()
  status: StatusTypeEnum;

  @SpeakeasyMetadata()
  uploadDate?: Date;

  @SpeakeasyMetadata()
  userName: string;
}
