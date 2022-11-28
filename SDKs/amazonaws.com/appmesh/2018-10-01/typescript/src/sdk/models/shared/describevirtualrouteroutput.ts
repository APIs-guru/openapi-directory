import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualRouterData } from "./virtualrouterdata";



export class DescribeVirtualRouterOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualRouter" })
  virtualRouter?: VirtualRouterData;
}
