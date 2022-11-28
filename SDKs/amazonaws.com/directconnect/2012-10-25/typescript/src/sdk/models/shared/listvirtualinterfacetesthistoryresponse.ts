import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualInterfaceTestHistory } from "./virtualinterfacetesthistory";



export class ListVirtualInterfaceTestHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceTestHistory", elemType: VirtualInterfaceTestHistory })
  virtualInterfaceTestHistory?: VirtualInterfaceTestHistory[];
}
