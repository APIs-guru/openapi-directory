import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyPairInfo } from "./keypairinfo";



export class DescribeKeyPairsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: KeyPairInfo })
  keyPairs?: KeyPairInfo[];
}
