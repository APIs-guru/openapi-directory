import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEnvironmentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentIds" })
  environmentIds: string[];
}
