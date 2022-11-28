import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualInterfaceTestHistory } from "./virtualinterfacetesthistory";



export class StopBgpFailoverTestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceTest" })
  virtualInterfaceTest?: VirtualInterfaceTestHistory;
}
