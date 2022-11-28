import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualRouterData } from "./virtualrouterdata";



export class DeleteVirtualRouterOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualRouter" })
  virtualRouter?: VirtualRouterData;
}
