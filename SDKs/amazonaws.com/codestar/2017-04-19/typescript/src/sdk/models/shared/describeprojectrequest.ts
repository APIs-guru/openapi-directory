import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
