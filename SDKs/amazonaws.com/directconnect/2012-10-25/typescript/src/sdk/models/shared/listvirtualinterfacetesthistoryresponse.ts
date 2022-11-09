import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VirtualInterfaceTestHistory } from "./virtualinterfacetesthistory";


export class ListVirtualInterfaceTestHistoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=virtualInterfaceTestHistory", elemType: shared.VirtualInterfaceTestHistory })
  virtualInterfaceTestHistory?: VirtualInterfaceTestHistory[];
}
