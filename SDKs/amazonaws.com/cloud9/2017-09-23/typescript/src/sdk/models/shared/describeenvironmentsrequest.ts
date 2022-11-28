import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEnvironmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentIds" })
  environmentIds: string[];
}
