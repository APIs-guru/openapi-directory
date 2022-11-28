import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";



export class DescribeCertificatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Certificates", elemType: Certificate })
  certificates?: Certificate[];

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
