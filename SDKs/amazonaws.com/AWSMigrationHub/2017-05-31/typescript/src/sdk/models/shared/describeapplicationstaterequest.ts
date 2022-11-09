import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeApplicationStateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;
}
