import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
