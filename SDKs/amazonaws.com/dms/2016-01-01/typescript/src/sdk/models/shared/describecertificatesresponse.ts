import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Certificate } from "./certificate";


export class DescribeCertificatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Certificates", elemType: shared.Certificate })
  certificates?: Certificate[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
