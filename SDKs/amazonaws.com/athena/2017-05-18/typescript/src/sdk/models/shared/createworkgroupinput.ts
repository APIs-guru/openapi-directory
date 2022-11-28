import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkGroupConfiguration } from "./workgroupconfiguration";
import { Tag } from "./tag";



export class CreateWorkGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Configuration" })
  configuration?: WorkGroupConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
