import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserDefinedFunctionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=FunctionName" })
  functionName: string;
}
