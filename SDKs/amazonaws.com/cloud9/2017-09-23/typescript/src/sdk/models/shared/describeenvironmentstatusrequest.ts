import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEnvironmentStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentId" })
  environmentId: string;
}
