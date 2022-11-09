import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSubnetGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=SubnetGroupName" })
  subnetGroupName: string;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];
}
