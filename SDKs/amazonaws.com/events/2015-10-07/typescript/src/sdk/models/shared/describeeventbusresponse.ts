import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEventBusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Policy" })
  policy?: string;
}
