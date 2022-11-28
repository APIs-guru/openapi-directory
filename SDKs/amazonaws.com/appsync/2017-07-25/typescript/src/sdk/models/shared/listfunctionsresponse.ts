import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionConfiguration } from "./functionconfiguration";



export class ListFunctionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=functions", elemType: FunctionConfiguration })
  functions?: FunctionConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
