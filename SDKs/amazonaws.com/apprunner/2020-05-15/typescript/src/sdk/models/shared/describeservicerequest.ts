import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceArn" })
  serviceArn: string;
}
