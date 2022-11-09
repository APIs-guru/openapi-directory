import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegistryStatusEnum } from "./registrystatusenum";


export class GetRegistryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=RegistryArn" })
  registryArn?: string;

  @Metadata({ data: "json, name=RegistryName" })
  registryName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: RegistryStatusEnum;

  @Metadata({ data: "json, name=UpdatedTime" })
  updatedTime?: string;
}
