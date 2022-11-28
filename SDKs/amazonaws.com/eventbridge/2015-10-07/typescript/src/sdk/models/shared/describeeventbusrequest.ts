import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEventBusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
