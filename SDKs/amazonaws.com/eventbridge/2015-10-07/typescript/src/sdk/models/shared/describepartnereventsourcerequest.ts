import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePartnerEventSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
