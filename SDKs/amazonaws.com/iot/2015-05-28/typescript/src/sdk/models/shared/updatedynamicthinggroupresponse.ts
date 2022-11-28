import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDynamicThingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
