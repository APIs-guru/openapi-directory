import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSubnetGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetGroupName" })
  subnetGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}
