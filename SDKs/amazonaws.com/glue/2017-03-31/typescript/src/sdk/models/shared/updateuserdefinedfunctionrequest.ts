import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserDefinedFunctionInput } from "./userdefinedfunctioninput";


export class UpdateUserDefinedFunctionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=FunctionInput" })
  functionInput: UserDefinedFunctionInput;

  @Metadata({ data: "json, name=FunctionName" })
  functionName: string;
}
