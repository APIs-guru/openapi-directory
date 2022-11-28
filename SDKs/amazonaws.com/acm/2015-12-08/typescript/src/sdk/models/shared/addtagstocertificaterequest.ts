import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class AddTagsToCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags: Tag[];
}
