import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class RemoveTagsFromCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateArn" })
  certificateArn: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags: Tag[];
}
