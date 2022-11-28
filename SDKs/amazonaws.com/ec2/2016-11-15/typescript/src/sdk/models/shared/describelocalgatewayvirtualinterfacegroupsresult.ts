import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalGatewayVirtualInterfaceGroup } from "./localgatewayvirtualinterfacegroup";



export class DescribeLocalGatewayVirtualInterfaceGroupsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LocalGatewayVirtualInterfaceGroup })
  localGatewayVirtualInterfaceGroups?: LocalGatewayVirtualInterfaceGroup[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
