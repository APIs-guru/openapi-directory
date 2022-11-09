import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomRoutingAccelerator } from "./customroutingaccelerator";


export class ListCustomRoutingAcceleratorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Accelerators", elemType: shared.CustomRoutingAccelerator })
  accelerators?: CustomRoutingAccelerator[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
