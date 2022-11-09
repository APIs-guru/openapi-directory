import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegistryStatusEnum } from "./registrystatusenum";


export class DeleteRegistryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegistryArn" })
  registryArn?: string;

  @Metadata({ data: "json, name=RegistryName" })
  registryName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: RegistryStatusEnum;
}
