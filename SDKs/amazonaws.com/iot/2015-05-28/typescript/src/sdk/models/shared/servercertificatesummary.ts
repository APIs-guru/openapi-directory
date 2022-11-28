import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerCertificateStatusEnum } from "./servercertificatestatusenum";



// ServerCertificateSummary
/** 
 * An object that contains information about a server certificate.
**/
export class ServerCertificateSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serverCertificateArn" })
  serverCertificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=serverCertificateStatus" })
  serverCertificateStatus?: ServerCertificateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=serverCertificateStatusDetail" })
  serverCertificateStatusDetail?: string;
}
