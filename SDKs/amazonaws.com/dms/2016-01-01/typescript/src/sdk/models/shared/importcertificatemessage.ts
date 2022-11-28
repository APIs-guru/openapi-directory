import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class ImportCertificateMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateIdentifier" })
  certificateIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=CertificatePem" })
  certificatePem?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateWallet" })
  certificateWallet?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
