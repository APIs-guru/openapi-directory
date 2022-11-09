import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { Tag } from "./tag";


export class CreateEnvironmentEc2Request extends SpeakeasyBase {
  @Metadata({ data: "json, name=automaticStopTimeMinutes" })
  automaticStopTimeMinutes?: number;

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=connectionType" })
  connectionType?: ConnectionTypeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=imageId" })
  imageId?: string;

  @Metadata({ data: "json, name=instanceType" })
  instanceType: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=ownerArn" })
  ownerArn?: string;

  @Metadata({ data: "json, name=subnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
