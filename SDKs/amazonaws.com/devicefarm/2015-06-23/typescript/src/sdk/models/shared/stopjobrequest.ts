import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
