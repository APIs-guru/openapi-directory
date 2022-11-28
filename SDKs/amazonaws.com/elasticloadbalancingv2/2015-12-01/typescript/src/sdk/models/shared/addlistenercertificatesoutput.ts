import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";



export class AddListenerCertificatesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Certificate })
  certificates?: Certificate[];
}
