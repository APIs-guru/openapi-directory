import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateBillingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
