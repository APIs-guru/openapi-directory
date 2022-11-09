import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InputSummary } from "./inputsummary";


export class ListInputsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputSummaries", elemType: shared.InputSummary })
  inputSummaries?: InputSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
