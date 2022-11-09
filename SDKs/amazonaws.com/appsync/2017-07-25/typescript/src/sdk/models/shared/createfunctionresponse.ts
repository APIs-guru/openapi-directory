import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FunctionConfiguration } from "./functionconfiguration";


export class CreateFunctionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=functionConfiguration" })
  functionConfiguration?: FunctionConfiguration;
}
