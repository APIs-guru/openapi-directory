import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
