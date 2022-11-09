import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
