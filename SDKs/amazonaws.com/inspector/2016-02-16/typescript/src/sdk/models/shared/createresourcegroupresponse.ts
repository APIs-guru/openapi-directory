import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateResourceGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceGroupArn" })
  resourceGroupArn: string;
}
