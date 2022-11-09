import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Interconnect } from "./interconnect";


export class Interconnects extends SpeakeasyBase {
  @Metadata({ data: "json, name=interconnects", elemType: shared.Interconnect })
  interconnects?: Interconnect[];
}
