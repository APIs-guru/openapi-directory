import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;
}
