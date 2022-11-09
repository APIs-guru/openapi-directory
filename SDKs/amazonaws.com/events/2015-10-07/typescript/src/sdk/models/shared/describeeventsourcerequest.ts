import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEventSourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
