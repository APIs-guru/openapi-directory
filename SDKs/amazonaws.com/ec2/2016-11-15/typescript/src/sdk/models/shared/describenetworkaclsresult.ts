import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkAcl } from "./networkacl";



export class DescribeNetworkAclsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: NetworkAcl })
  networkAcls?: NetworkAcl[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
