import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserDefinedFunction } from "./userdefinedfunction";



export class GetUserDefinedFunctionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=UserDefinedFunctions", elemType: UserDefinedFunction })
  userDefinedFunctions?: UserDefinedFunction[];
}
