import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUserDefinedFunctionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionName" })
  functionName: string;
}
