import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeApplicationStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;
}
