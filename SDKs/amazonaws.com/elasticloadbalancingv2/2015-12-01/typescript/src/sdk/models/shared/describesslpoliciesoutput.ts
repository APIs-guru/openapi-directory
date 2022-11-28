import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SslPolicy } from "./sslpolicy";



export class DescribeSslPoliciesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata({ elemType: SslPolicy })
  sslPolicies?: SslPolicy[];
}
