import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingAccelerator } from "./customroutingaccelerator";



export class ListCustomRoutingAcceleratorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Accelerators", elemType: CustomRoutingAccelerator })
  accelerators?: CustomRoutingAccelerator[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
