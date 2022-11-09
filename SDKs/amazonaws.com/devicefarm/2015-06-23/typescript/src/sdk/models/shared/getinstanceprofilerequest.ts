import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstanceProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
