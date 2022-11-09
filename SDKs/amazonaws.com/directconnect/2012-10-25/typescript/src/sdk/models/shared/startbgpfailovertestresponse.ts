import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualInterfaceTestHistory } from "./virtualinterfacetesthistory";


export class StartBgpFailoverTestResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualInterfaceTest" })
  virtualInterfaceTest?: VirtualInterfaceTestHistory;
}
