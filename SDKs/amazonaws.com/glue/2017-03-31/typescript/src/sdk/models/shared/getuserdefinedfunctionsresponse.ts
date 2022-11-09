import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserDefinedFunction } from "./userdefinedfunction";


export class GetUserDefinedFunctionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=UserDefinedFunctions", elemType: shared.UserDefinedFunction })
  userDefinedFunctions?: UserDefinedFunction[];
}
