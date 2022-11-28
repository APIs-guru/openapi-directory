import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteParameterGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName: string;
}
