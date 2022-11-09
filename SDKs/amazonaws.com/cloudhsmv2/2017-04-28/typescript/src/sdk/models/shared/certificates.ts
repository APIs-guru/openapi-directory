import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Certificates
/** 
 * Contains one or more certificates or a certificate signing request (CSR).
**/
export class Certificates extends SpeakeasyBase {
  @Metadata({ data: "json, name=AwsHardwareCertificate" })
  awsHardwareCertificate?: string;

  @Metadata({ data: "json, name=ClusterCertificate" })
  clusterCertificate?: string;

  @Metadata({ data: "json, name=ClusterCsr" })
  clusterCsr?: string;

  @Metadata({ data: "json, name=HsmCertificate" })
  hsmCertificate?: string;

  @Metadata({ data: "json, name=ManufacturerHardwareCertificate" })
  manufacturerHardwareCertificate?: string;
}
