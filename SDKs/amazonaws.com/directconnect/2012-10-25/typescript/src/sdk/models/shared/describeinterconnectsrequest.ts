import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeInterconnectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interconnectId" })
  interconnectId?: string;
}
