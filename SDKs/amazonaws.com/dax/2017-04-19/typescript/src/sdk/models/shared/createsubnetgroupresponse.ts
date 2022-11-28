import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubnetGroup } from "./subnetgroup";



export class CreateSubnetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SubnetGroup" })
  subnetGroup?: SubnetGroup;
}
