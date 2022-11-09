import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSubnetGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SubnetGroupName" })
  subnetGroupName: string;
}
