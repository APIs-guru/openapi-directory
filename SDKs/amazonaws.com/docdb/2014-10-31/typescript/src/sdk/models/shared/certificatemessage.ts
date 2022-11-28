import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";



export class CertificateMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Certificate })
  certificates?: Certificate[];

  @SpeakeasyMetadata()
  marker?: string;
}
