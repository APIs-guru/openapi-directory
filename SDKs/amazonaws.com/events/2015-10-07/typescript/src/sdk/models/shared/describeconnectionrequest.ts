import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
