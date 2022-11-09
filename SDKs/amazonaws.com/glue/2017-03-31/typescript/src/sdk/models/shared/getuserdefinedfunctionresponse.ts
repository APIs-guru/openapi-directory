import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserDefinedFunction } from "./userdefinedfunction";


export class GetUserDefinedFunctionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserDefinedFunction" })
  userDefinedFunction?: UserDefinedFunction;
}
