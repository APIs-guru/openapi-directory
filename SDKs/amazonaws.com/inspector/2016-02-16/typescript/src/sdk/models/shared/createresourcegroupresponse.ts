import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateResourceGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceGroupArn" })
  resourceGroupArn: string;
}
