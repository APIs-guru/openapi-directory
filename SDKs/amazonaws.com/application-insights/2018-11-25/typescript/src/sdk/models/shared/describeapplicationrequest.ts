import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;
}
