import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateParameterGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName: string;
}
