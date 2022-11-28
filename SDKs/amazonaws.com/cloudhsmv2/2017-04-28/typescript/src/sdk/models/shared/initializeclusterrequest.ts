import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InitializeClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=SignedCert" })
  signedCert: string;

  @SpeakeasyMetadata({ data: "json, name=TrustAnchor" })
  trustAnchor: string;
}
