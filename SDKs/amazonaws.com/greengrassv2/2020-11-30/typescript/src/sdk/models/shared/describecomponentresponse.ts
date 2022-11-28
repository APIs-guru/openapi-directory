import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComponentPlatform } from "./componentplatform";
import { CloudComponentStatus } from "./cloudcomponentstatus";



export class DescribeComponentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=componentName" })
  componentName?: string;

  @SpeakeasyMetadata({ data: "json, name=componentVersion" })
  componentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTimestamp" })
  creationTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=platforms", elemType: ComponentPlatform })
  platforms?: ComponentPlatform[];

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CloudComponentStatus;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
