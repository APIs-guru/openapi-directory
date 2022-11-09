import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualInterfaceTestHistory } from "./virtualinterfacetesthistory";


export class StopBgpFailoverTestResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualInterfaceTest" })
  virtualInterfaceTest?: VirtualInterfaceTestHistory;
}
