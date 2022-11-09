import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateAcceleratorAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;

  @Metadata({ data: "json, name=FlowLogsEnabled" })
  flowLogsEnabled?: boolean;

  @Metadata({ data: "json, name=FlowLogsS3Bucket" })
  flowLogsS3Bucket?: string;

  @Metadata({ data: "json, name=FlowLogsS3Prefix" })
  flowLogsS3Prefix?: string;
}
