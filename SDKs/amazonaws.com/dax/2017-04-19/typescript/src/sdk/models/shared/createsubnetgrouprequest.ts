import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSubnetGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetGroupName" })
  subnetGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];
}
