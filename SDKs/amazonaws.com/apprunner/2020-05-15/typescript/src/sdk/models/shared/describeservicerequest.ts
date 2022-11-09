import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceArn" })
  serviceArn: string;
}
