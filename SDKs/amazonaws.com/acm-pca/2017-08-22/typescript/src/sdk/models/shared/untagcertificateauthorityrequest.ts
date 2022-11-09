import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class UntagCertificateAuthorityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags: Tag[];
}
