import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { Tag } from "./tag";



export class CreateEnvironmentEc2Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automaticStopTimeMinutes" })
  automaticStopTimeMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionType" })
  connectionType?: ConnectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=imageId" })
  imageId?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ownerArn" })
  ownerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetId" })
  subnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
