import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateParameterGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName: string;
}
