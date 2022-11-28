import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEnvironmentStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId: string;
}
