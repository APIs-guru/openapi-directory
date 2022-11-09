import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProvisionedCapacityDescription } from "./provisionedcapacitydescription";


export class ListProvisionedCapacityOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProvisionedCapacityList", elemType: shared.ProvisionedCapacityDescription })
  provisionedCapacityList?: ProvisionedCapacityDescription[];
}
