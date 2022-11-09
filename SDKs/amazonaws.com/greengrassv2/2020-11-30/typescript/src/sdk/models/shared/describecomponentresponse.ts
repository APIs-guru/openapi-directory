import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComponentPlatform } from "./componentplatform";
import { CloudComponentStatus } from "./cloudcomponentstatus";


export class DescribeComponentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=componentName" })
  componentName?: string;

  @Metadata({ data: "json, name=componentVersion" })
  componentVersion?: string;

  @Metadata({ data: "json, name=creationTimestamp" })
  creationTimestamp?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=platforms", elemType: shared.ComponentPlatform })
  platforms?: ComponentPlatform[];

  @Metadata({ data: "json, name=publisher" })
  publisher?: string;

  @Metadata({ data: "json, name=status" })
  status?: CloudComponentStatus;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
