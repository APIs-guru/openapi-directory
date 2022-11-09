import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
