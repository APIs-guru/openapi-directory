import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;
}
