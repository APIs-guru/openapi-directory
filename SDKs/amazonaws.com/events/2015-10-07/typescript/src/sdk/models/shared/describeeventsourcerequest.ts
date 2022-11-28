import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEventSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
