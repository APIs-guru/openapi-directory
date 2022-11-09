import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteInstanceProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
