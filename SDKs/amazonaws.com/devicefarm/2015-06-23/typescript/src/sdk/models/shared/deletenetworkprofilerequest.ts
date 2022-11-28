import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteNetworkProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
