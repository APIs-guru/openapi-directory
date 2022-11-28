import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedCapacityDescription } from "./provisionedcapacitydescription";



export class ListProvisionedCapacityOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProvisionedCapacityList", elemType: ProvisionedCapacityDescription })
  provisionedCapacityList?: ProvisionedCapacityDescription[];
}
