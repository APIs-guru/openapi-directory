import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Certificates
/** 
 * Contains one or more certificates or a certificate signing request (CSR).
**/
export class Certificates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsHardwareCertificate" })
  awsHardwareCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterCertificate" })
  clusterCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterCsr" })
  clusterCsr?: string;

  @SpeakeasyMetadata({ data: "json, name=HsmCertificate" })
  hsmCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=ManufacturerHardwareCertificate" })
  manufacturerHardwareCertificate?: string;
}
