import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InitializeClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @Metadata({ data: "json, name=SignedCert" })
  signedCert: string;

  @Metadata({ data: "json, name=TrustAnchor" })
  trustAnchor: string;
}
