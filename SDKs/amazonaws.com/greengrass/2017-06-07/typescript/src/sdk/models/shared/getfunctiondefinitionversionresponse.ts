import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionDefinitionVersion } from "./functiondefinitionversion";



export class GetFunctionDefinitionVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition?: FunctionDefinitionVersion;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
