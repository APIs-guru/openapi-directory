import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribePartnerEventSourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
