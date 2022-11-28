import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputSummary } from "./inputsummary";



export class ListInputsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputSummaries", elemType: InputSummary })
  inputSummaries?: InputSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
