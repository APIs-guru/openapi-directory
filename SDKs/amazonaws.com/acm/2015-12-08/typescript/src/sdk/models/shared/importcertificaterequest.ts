import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class ImportCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Certificate" })
  certificate: string;

  @Metadata({ data: "json, name=CertificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=CertificateChain" })
  certificateChain?: string;

  @Metadata({ data: "json, name=PrivateKey" })
  privateKey: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
