import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";



export class DescribeListenerCertificatesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Certificate })
  certificates?: Certificate[];

  @SpeakeasyMetadata()
  nextMarker?: string;
}
