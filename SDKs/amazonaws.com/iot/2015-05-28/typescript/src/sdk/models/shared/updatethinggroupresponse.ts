import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateThingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
