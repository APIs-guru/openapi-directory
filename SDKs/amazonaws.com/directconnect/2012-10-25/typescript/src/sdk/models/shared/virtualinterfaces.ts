import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VirtualInterface } from "./virtualinterface";


export class VirtualInterfaces extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualInterfaces", elemType: shared.VirtualInterface })
  virtualInterfaces?: VirtualInterface[];
}
