import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEventBusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: string;
}
