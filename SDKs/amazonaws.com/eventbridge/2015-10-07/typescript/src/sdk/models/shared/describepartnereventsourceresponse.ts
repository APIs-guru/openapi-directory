import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePartnerEventSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
