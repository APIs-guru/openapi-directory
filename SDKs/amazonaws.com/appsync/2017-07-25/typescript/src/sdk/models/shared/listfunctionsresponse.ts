import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FunctionConfiguration } from "./functionconfiguration";


export class ListFunctionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=functions", elemType: shared.FunctionConfiguration })
  functions?: FunctionConfiguration[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
