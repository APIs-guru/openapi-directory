import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteParameterGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName: string;
}
