import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserDefinedFunction } from "./userdefinedfunction";



export class GetUserDefinedFunctionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserDefinedFunction" })
  userDefinedFunction?: UserDefinedFunction;
}
