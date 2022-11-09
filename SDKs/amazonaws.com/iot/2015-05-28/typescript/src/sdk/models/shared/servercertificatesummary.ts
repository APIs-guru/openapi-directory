import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServerCertificateStatusEnum } from "./servercertificatestatusenum";


// ServerCertificateSummary
/** 
 * An object that contains information about a server certificate.
**/
export class ServerCertificateSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=serverCertificateArn" })
  serverCertificateArn?: string;

  @Metadata({ data: "json, name=serverCertificateStatus" })
  serverCertificateStatus?: ServerCertificateStatusEnum;

  @Metadata({ data: "json, name=serverCertificateStatusDetail" })
  serverCertificateStatusDetail?: string;
}
