import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkGroupConfiguration } from "./workgroupconfiguration";
import { Tag } from "./tag";


export class CreateWorkGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Configuration" })
  configuration?: WorkGroupConfiguration;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
