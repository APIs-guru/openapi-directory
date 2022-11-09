import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParameterNameValue } from "./parameternamevalue";


export class UpdateParameterGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName: string;

  @Metadata({ data: "json, name=ParameterNameValues", elemType: shared.ParameterNameValue })
  parameterNameValues: ParameterNameValue[];
}
