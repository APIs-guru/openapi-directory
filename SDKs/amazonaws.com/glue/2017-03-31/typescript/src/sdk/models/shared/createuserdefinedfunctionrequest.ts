import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserDefinedFunctionInput } from "./userdefinedfunctioninput";


export class CreateUserDefinedFunctionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=FunctionInput" })
  functionInput: UserDefinedFunctionInput;
}
